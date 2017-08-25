import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'

import { signaling } from './Protobuf'
import { WebChannel } from './service/WebChannel'
import { Channel } from './Channel'

/* tslint:disable:variable-name */

interface SignalingConnection {
  stream: Subject<any>,
  send: (msg: any) => any,
  pong: () => void,
  ping: () => void,
  close: (code: number, reason?: string) => void,
  readyState: number
}

type State = 0 | 1 | 2 | 3


const PING_INTERVAL = 2500

const pingMsg = signaling.Message.encode(signaling.Message.create({ ping: true })).finish()
const pongMsg = signaling.Message.encode(signaling.Message.create({ pong: true })).finish()

/**
 * This class represents a door of the `WebChannel` for the current peer. If the door
 * is open, then clients can join the `WebChannel` through this peer. There are as
 * many doors as peers in the `WebChannel` and each of them can be closed or opened.
 */
export class Signaling {

  static CONNECTING = 0
  static CONNECTED = 1
  static OPEN = 2
  static CLOSED = 3

  public url: string
  public onChannel: (ch: Channel) => void
  public onStateChanged: (state: number) => void

  private wc: WebChannel
  private _state: number
  private rxWs: SignalingConnection
  private pingInterval: any
  private pongReceived: boolean

  /**
   * @param {WebChannel} wc
   * @param {function(ch: RTCDataChannel)} onChannel
   * @param {string} url
   */
  constructor (wc: WebChannel, onChannel: (ch: Channel) => void, url: string) {
    // public
    this.url = url.endsWith('/') ? url : url + '/'
    this.onChannel = onChannel
    this.onStateChanged = () => {}

    // private
    this.wc = wc
    this._state = Signaling.CLOSED
    this.rxWs = undefined
    this.pingInterval = undefined
    this.pongReceived = false
  }

  set state (state: number) {
    if (this._state !== state) {
      this._state = state
      this.onStateChanged(state)
      if (this._state === Signaling.OPEN) {
        this.wc.webRTCBuilder.channelsFromSignaling({
          stream: this.rxWs.stream.filter(msg => msg.type === 'content')
            .map(({ content }) => content),
          send: msg => this.rxWs.send({ content: msg })
        })
          .subscribe(
            ch => this.onChannel(ch),
            err => console.error(err.message)
          )
      }
    }
  }

  get state (): number {
    return this._state
  }

  /**
   * Notify Signaling server that you had joined the network and ready
   * to add new peers to the network.
   */
  open (): void {
    if (this.state === Signaling.CONNECTED) {
      this.rxWs.send({ joined: true })
      this.state = Signaling.OPEN
    }
  }

  async join (key): Promise<boolean> {
    if (this.state !== Signaling.CLOSED) {
      throw new Error('Failed to join via signaling: connection with signaling is already opened')
    }
    this.state = Signaling.CONNECTING
    try {
      const ws = await this.wc.webSocketBuilder.connect(this.url + key)
      this.rxWs = this.createRxWs(ws)
      const isFirst = await new Promise ((resolve, reject) => {
        this.rxWs.stream.subscribe(
          msg => {
            switch (msg.type) {
            case 'ping': {
              this.rxWs.pong()
              break
            }
            case 'pong': {
              this.pongReceived = true
              break
            }
            case 'isFirst':
              if (msg.isFirst) {
                this.state = Signaling.OPEN
                resolve(true)
              } else {
                this.wc.webRTCBuilder.connectOverSignaling({
                  stream: this.rxWs.stream.filter(msg => msg.type === 'content')
                    .map(({ content }) => content),
                  send: (msg) => this.rxWs.send({ content: msg })
                })
                  .then((ch) => {
                    this.state = Signaling.CONNECTED
                    resolve(false)
                  })
                  .catch(err => {
                    if (this.rxWs.readyState !== 2 && this.rxWs.readyState !== 3) {
                      this.rxWs.close(1000)
                    }
                    reject(new Error(`Failed to join over Signaling: ${err.message}`))
                  })
              }
              break
            }
          },
          err => reject(err)
        )
      })
      return isFirst as boolean
    } catch (err) {
      this.state = Signaling.CLOSED
    }
  }

  /**
   * Close the `WebSocket` with Signaling server.
   */
  close (): void {
    if (this.state !== Signaling.CLOSED) {
      this.rxWs.close(1000)
    }
  }

  private startPingInterval () {
    this.rxWs.ping()
    this.pingInterval = setInterval(() => {
      if (!this.pongReceived && this.rxWs.readyState !== WebSocket.CLOSING && this.rxWs.readyState !== WebSocket.CLOSED) {
        this.rxWs.close(4002, 'Signaling is no longer available')
        clearInterval(this.pingInterval)
      } else {
        this.pongReceived = false
        this.rxWs.ping()
      }
    }, PING_INTERVAL)
  }

  private createRxWs (ws: WebSocket): SignalingConnection {
    const subject = new Subject()
    const setClosedState = (code, reason) => {
      this.state = Signaling.CLOSED
      if (code === 1000) {
        subject.complete()
      } else {
        subject.error(new Error(`${code}: ${reason}`))
      }
    }
    ws.binaryType = 'arraybuffer'
    ws.onmessage = evt => {
      try {
        subject.next(signaling.Message.decode(new Uint8Array(evt.data)))
      } catch (err) {
        console.error('Signaling message error', err)
        ws.close(4000, err.message)
        setClosedState(4000, err.message)
      }
    }
    ws.onerror = err => subject.error(err)
    ws.onclose = closeEvt => setClosedState(closeEvt.code, closeEvt.reason)
    ws.onopen = () => this.startPingInterval()
    return {
      stream: subject,
      send: msg => ws.send(signaling.Message.encode(
        signaling.Message.create(msg)
      ).finish()),
      pong: () => ws.send(pongMsg),
      ping: () => ws.send(pingMsg),
      close: (code, reason) => {
        ws.close(code, reason)
        setClosedState(code, reason)
      },
      readyState: ws.readyState
    }
  }
}
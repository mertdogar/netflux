import { WebChannel } from '../../src/service/WebChannel'
import { BotServer } from '../../src/BotServer'
import { onMessageForBot, SIGNALING_URL, BOT_HOST, BOT_PORT } from './helper'

// Require dependencies
const http = require('http')
const Koa = require('koa')
const Router = require('koa-router')
const cors = require('kcors')

try {
  // Instantiate main objects
  const app = new Koa()
  const router = new Router()
  const server = http.createServer(app.callback())
  const bot = new BotServer({ bot: { server } })

  // Configure router
  router
    .get('/members/:wcId', (ctx, next) => {
      const wcId = Number(ctx.params.wcId)
      let members = []
      let id
      for (let wc of bot.webChannels) {
        if (wc.id === wcId) {
          members = wc.members
          id = wc.myId
          break
        }
      }
      ctx.body = {id, members}
    })
    .get('/send/:wcId', (ctx, next) => {
      const wcId = Number(ctx.params.wcId)
      for (let wc of bot.webChannels) {
        if (wc.id === wcId) {
          // Create a message
          const msg = JSON.stringify({ id: wc.myId })

          // Broadcast the message
          wc.send(msg)

          // Send the message privately to each peer
          wc.members.forEach(id => wc.sendTo(id, msg))
          ctx.status = 200
          break
        }
      }
    })

  // Apply router and cors middlewares
  app
    .use(cors())
    .use(router.routes())
    .use(router.allowedMethods())

  // Configure bot
  bot.onWebChannel = wc => {
    wc.onMessage = (id, msg, isBroadcast) => {
      onMessageForBot(wc, id, msg, isBroadcast)
    }
  }
  bot.onError = err => console.error('Bot ERROR: ', err)

  // Add specific web channel to the bot for tests in Chrome
  bot.addWebChannel(createWebChannel('CHROME'))

  // Add specific web channel to the bot for tests in Firefox
  bot.addWebChannel(createWebChannel('FIREFOX'))

  // Add specific web channel to the bot for tests in NodeJS
  bot.addWebChannel(createWebChannel('NODE'))

  // Start the server
  server.listen(BOT_PORT, BOT_HOST, () => {
    const host = server.address().address
    const port = server.address().port
    console.info('Netflux bot is listening on ' + host + ':' + port)
  })

  // Leave all web channels before process death
  process.on('SIGINT', () => bot.webChannels.forEach(wc => wc.leave()))
} catch (err) {
  console.error('BotServer script error: ', err)
}

function createWebChannel (env) {
  // Add specific web channel to the bot for tests in Firefox
  const wc = new WebChannel({signalingURL: SIGNALING_URL})
  wc.onMessage = (id, msg, isBroadcast) => {
    onMessageForBot(wc, id, msg, isBroadcast)
  }
  wc.onDisconnect = closeEvt => {
    console.warn(`${env} bot has disconnected from: ${SIGNALING_URL}`)
  }
  wc.join('FIREFOX')
    .then(() => console.info(`${env} bot is ready`))
    .catch(reason => console.error(`${env} bot WebChannel open error: ${reason}`))
  return wc
}
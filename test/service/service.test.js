import * as service from '../../src/service/service'

it('Service name should be its constructor name', () => {
  class MyService extends service.Interface {}
  let obj = new MyService()
  expect(obj.name).toEqual('MyService')
})

it('All unimplemented methods of service.Interface should throw an Exception', () => {
  class MyService extends service.Interface {}
  let obj = new MyService()
  expect(obj.onMessage).toThrow()
})
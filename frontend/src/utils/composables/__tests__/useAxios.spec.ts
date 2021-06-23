import {useAxios} from '../useAxios'
import {server} from '../../../../mocks/node'
import { rest } from 'msw'

it('returns request data', async () => {
  server.use(
    rest.get('/api/test', (_req, res, ctx) => res(ctx.json(true)))
  );
  const {data, execute, isErrored, isLoading} = useAxios('/test')
  await execute();
  expect(data.value).toBe(true)
  expect(isErrored.value).toBe(false)
  expect(isLoading.value).toBe(false)
})

it('reports isErrored', async () => {
  const expectedResponse = 'errormessage'
  server.use(
    rest.get('/api/test', (_req, res, ctx) => 
      res(
        ctx.json(expectedResponse),
        ctx.status(400)))
  );
  const {data, execute, isErrored, isLoading} = useAxios('/test')
  await execute();
  expect(data.value).toBe(expectedResponse)
  expect(isErrored.value).toBe(true)
  expect(isLoading.value).toBe(false)
})

it('reports isLoading', async () => {
  server.use(
    rest.get('/api/test', (_req, res, _ctx) => res())
  )
  const {execute, isLoading} = useAxios('/test')
  const promise = execute();
  expect(isLoading.value).toBe(true)
  await promise;
  expect(isLoading.value).toBe(false)
})

it('appends extendedUrl', async () => {
  const expectedResponse = 'ok'
  server.use(
    rest.get('/api/test/10', (_req, res, ctx) => res(ctx.json(expectedResponse)))
  )
  const {data, execute} = useAxios('/test/')
  await execute('10');
  expect(data.value).toBe(expectedResponse)

})

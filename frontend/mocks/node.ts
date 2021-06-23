import { rest } from 'msw'
import { setupServer } from 'msw/node'
import {handlers} from './handlers'

export const server = setupServer(...handlers, rest.get('*', () => {
  console.error('msw didnt catch request')
  throw new Error("MSW didn't catch request")
}))

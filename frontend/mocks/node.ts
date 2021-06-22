import { rest } from 'msw'
import { setupServer } from 'msw/node'
import {handlers} from './handlers'
import {MyFoodItem} from './browser'


export const server = setupServer(...handlers)

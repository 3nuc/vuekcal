import {setupWorker} from 'msw'
import {handlers } from './handlers'

export interface MyFoodItem {
  id: string;
  name: string;
  /* Always per 100g */
  calories: number;
  producer: string;
  servingSizeInGrams: number;
}

export const mockServiceWorker = setupWorker(...handlers)

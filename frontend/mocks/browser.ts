import {rest, setupWorker} from 'msw'

export interface MyFoodItem {
  id: string;
  name: string;
  /* Always per 100g */
  calories: number;
  producer: string;
  servingSizeInGrams: number;
}
const handlers = [
  rest.get<MyFoodItem[]>('/api/fooditems', (_req, res,ctx) => {
    const products : MyFoodItem[] = [
      {
       id: "241afsafasf",
       name: 'Serek wiejski',
       producer: 'Piątnica',
       calories: 200,
       servingSizeInGrams: 50,
      }
    ]
    return res(ctx.json(products))

  })
]

export const mockServiceWorker = setupWorker(...handlers)

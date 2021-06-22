import { rest } from "msw"
import { MyFoodItem } from "./browser"

export const handlers = [
  rest.get<MyFoodItem[]>('/api/fooditems', (_req, res,ctx) => {
    const products : MyFoodItem[] = [
      {
       id: "1",
       name: 'Serek wiejski',
       producer: 'Piątnica',
       calories: 200,
       servingSizeInGrams: 50,
      },
      {
       id: "2",
       name: 'Serek miejski',
       producer: 'Fivetnica',
       calories: 200,
       servingSizeInGrams: 50,
      }
    ]
    return res(ctx.json(products))

  })
]

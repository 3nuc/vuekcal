import FoodItemSingle from '../FoodItemSingle.vue'
import { render, waitFor } from '@testing-library/vue'

it('downloads fooditem on render', async () => {
  const {getByTestId} = render(FoodItemSingle, {props: {id: '10'}})
  await waitFor(() => expect(getByTestId('container')).toBeVisible())
})

it.skip('shows spinner when loading', () => {
  const {getByTestId} = render(FoodItemSingle)
  expect(getByTestId('spinner')).toBeVisible()
})

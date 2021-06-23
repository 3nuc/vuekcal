import { shallowMount } from "@vue/test-utils"
import FoodItemSingle from '../FoodItemSingle.vue'
import { screen } from '@testing-library/dom'

it('downloads fooditem on render', () => {
  const wrapper = shallowMount(FoodItemSingle)
})
it('shows spinner when loading', () => {
  const wrapper = shallowMount(FoodItemSingle)
  expect(screen.getByTestId('spinner')).toBe(true)
})

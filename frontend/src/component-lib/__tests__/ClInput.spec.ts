import { fireEvent, render } from '@testing-library/vue'
import ClInput from '../ClInput.vue'
  
it('displays suffix', () => {
  const modelValue = '100'
  const suffix = 'g' //grams
  const {getByTestId} = render(ClInput, {props: {modelValue, suffix}})
  const inputElement = getByTestId('input') as HTMLInputElement;
  expect(inputElement.value).toBe(`${modelValue}${suffix}`)
})
it('makes cursor ignore suffix after focus', () => {
  const modelValue = '100'
  const suffix = 'g' //grams
  const {getByTestId } = render(ClInput, {props: {modelValue, suffix}})
  const inputElement = getByTestId('input') as HTMLInputElement;
  //as if user typed 1000g
  const newValue = `${modelValue}9${suffix}` 
  inputElement.value = newValue;
  fireEvent(inputElement, new FocusEvent('focus'))

  const positionBeforeSuffixStart = modelValue.length;
  expect(inputElement.selectionStart).toBe(positionBeforeSuffixStart)
})

it('makes cursor ignore suffix after click', () => {
  const modelValue = '100'
  const suffix = 'g' //grams
  const {getByTestId } = render(ClInput, {props: {modelValue, suffix}})
  const inputElement = getByTestId('input') as HTMLInputElement;
  //as if user typed 1000g
  const newValue = `${modelValue}9${suffix}` 
  inputElement.value = newValue;
  fireEvent(inputElement, new InputEvent('click'))

  const positionBeforeSuffixStart = modelValue.length;
  expect(inputElement.selectionStart).toBe(positionBeforeSuffixStart)
})

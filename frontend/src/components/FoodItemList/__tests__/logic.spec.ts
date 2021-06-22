import { useSearchbox } from "../logic"

it('fires request on mounted', () => {
  const {searchResults} = useSearchbox()
  expect(searchResults).toHaveLength(1)
})

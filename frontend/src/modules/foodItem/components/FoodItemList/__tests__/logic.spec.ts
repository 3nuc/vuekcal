import { useSearchbox } from "../logic"

it('returns items', async () => {
  const {searchResults, onSearchTermChange} = useSearchbox()
  await onSearchTermChange('123');
  expect(searchResults.value).not.toHaveLength(0)
})


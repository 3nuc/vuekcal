import { useSearchbox } from "../logic"

it('returns items', async () => {
  const {searchResults, search} = useSearchbox()
  await search();
  expect(searchResults.value).not.toHaveLength(0)
})


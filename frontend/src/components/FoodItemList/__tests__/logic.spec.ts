import { useSearchbox } from "../logic"
import {server} from '../../../../mocks/node'
import {rest} from 'msw'

it('returns items', async () => {
  const {searchResults, search} = useSearchbox()
  await search();
  expect(searchResults.value).not.toHaveLength(0)
})


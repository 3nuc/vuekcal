import { ref } from "vue"
import { axiosInstance } from "../../utils/api/axios"
import _ from 'lodash-es'
import { debounceDelayMs } from "../../utils/constants"
import { useAxios } from "../../utils/composables/useAxios"
import {MyFoodItem} from '../../../mocks/browser'
export const useSearchbox = () => {
  const searchTerm = ref<string>('');
  const {data: searchResults, execute: search, isLoading} = useAxios<MyFoodItem>('/fooditems', {data: searchTerm.value}, axiosInstance)

  const onSearchTermChange = async (newSearchTerm: string) => {
    searchTerm.value = newSearchTerm;
    await search()
  }

  const debouncedOnSearchTermChange = _.debounce(onSearchTermChange, debounceDelayMs);

  return {
    search,
    searchTerm,
    debouncedOnSearchTermChange,
    searchResults,
    isLoading
  }
}

import { MyFoodItem } from "../../../../../mocks/browser"
import { axiosInstance } from "../../../../utils/api/axios"
import { useAxios } from "../../../../utils/composables/useAxios"

export const useSingleFoodItem = () => {
  const fetcher = useAxios<MyFoodItem>('/fooditems/', {}, axiosInstance)
  const execute = (id: string) => fetcher.execute(id)
  return {
    fetcher,
    execute
  }
}

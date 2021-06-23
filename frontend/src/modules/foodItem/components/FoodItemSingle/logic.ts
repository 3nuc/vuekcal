import { MyFoodItem } from "../../../../../mocks/browser"
import { axiosInstance } from "../../../../utils/api/axios"
import { useAxios } from "../../../../utils/composables/useAxios"

export const useSingleFoodItem = () => {
  const {data, execute, isLoading} = useAxios<MyFoodItem>('/fooditems/', {}, axiosInstance)
  const download = (id: string) => execute(id)
  return {
    data,
    download,
    isLoading
  }
}

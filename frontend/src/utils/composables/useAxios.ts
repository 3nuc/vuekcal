import { AxiosInstance, AxiosRequestConfig, AxiosPromise, AxiosResponse, AxiosError } from "axios";
import { ref } from "vue";
import {axiosInstance as _axiosInstance} from '../api/axios'

export const useAxios = <T>(url: string, config: AxiosRequestConfig = {}, axiosInstance: AxiosInstance = _axiosInstance) => {
  const data = ref<T>();
  const isLoading = ref<boolean>(false);
  const isErrored = ref<boolean>(false);
  /*
  * @param {extendUrl} - for eg. '/getSingleItem/' + ':id'
  */
  const execute = async (extendUrl: string = '') => {
     isErrored.value = false
    const promise = axiosInstance(url + extendUrl, config) as AxiosPromise<T>;
    isLoading.value = true;
    try {
      data.value = (await promise).data;
    } catch(e: unknown) {
      if(e && typeof e === 'object' && 'isAxiosError' in e) {
        data.value = (e as AxiosError).response?.data
      }
      isErrored.value = true
    } finally {
      isLoading.value = false 
    }
    return;
  }

  return {
    execute,
    data,
    isLoading,
    isErrored
  }
}

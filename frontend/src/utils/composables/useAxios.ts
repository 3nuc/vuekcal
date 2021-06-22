import { AxiosInstance, AxiosRequestConfig, AxiosPromise } from "axios";
import { ref } from "vue";

export const useAxios = <T>(url: string, config: AxiosRequestConfig, axiosInstance: AxiosInstance) => {
  const data = ref<T>();
  const isLoading = ref<boolean>(false);
  const isErrored = ref<boolean>(false);
  const execute = async () => {
     isErrored.value = false
    const promise = axiosInstance(url, config) as AxiosPromise<T>;
    isLoading.value = true;
    try {
      data.value = (await promise).data;
    } catch {
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

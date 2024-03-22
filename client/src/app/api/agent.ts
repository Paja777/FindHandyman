import axios, { AxiosError, AxiosResponse } from "axios";
import { store } from "../store/configureStore";
import { toast } from "react-toastify";
import { router } from "../router/Routes";


axios.defaults.baseURL = "https://mern-docker-api-latest.onrender.com/";



axios.defaults.withCredentials = true;

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.request.use(confing => {
  const token = store.getState().ad.user?.token;
  if(token) confing.headers.Authorization = `Bearer ${token}`;
  return confing;
})

axios.interceptors.response.use(async response => {
  return response;
}, (error: AxiosError) => {
  const { data, status } = error.response as AxiosResponse;
  switch (status) {
      case 404:
        router.navigate('/not-found', { state: { error: data } });
        break;
      case 401:
          toast.error(data.title);
          break;
      case 500:
          router.navigate('/server-error', { state: { error: data } });
          break;
      default:
          break;
  }
  return Promise.reject(error.response);
});


const requests = {
  get: (url: string, params?: URLSearchParams) => axios.get(url, {params}).then(responseBody),
  post: (url: string, body: {}, headers: {}) =>
    axios.post(url, body, headers).then(responseBody),
  patch: (url: string, body: {}, headers: {}) =>
    axios.patch(url, body, headers ).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};

const adCatalog = {
  details: (id: string) => requests.get(`/ad/${id}`),
};

const agent = {
  requests,
  adCatalog,
};

export default agent;

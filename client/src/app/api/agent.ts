import axios, { AxiosError, AxiosResponse } from "axios";


const sleep = () => new Promise(resolve => setTimeout(resolve, 500));

axios.defaults.baseURL = 'http://localhost:5000/';
axios.defaults.withCredentials = true;

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string, headers?: {}) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    patch: (url: string, body: {}) => axios.patch(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}

const adCatalog = {
    details: (id: string) => requests.get(`/ad/${id}`),
}


const agent = {
    requests,
    adCatalog,
}

export default agent;
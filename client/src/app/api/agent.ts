import axios, { AxiosError, AxiosResponse } from "axios";

const sleep = () => new Promise(resolve => setTimeout(resolve, 500));

axios.defaults.baseURL = 'http://localhost:5000/';
axios.defaults.withCredentials = true;

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string, params?: URLSearchParams) => axios.get(url, {params}).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.patch(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}


const agent = {
    requests,
}

export default agent;
import axios from "axios";
// import { authStore } from "service";

const client = axios.create()
 
client.interceptors.request.use(async (config) => {
  config.baseURL = process.env.REACT_APP_API_ENDPOINT
  config.headers!.Authorization = `Token1234`
  return config
}, (error) => {
  return Promise.reject(error)
})

client.interceptors.response.use(async (response) => {
  if (!response.data) {
    return Promise.reject(response)
  }
  return response
}, async (error) => {
  return Promise.reject(error.response)
})

export default client;
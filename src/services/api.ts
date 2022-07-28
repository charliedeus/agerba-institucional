import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_BASEURL,
})

export default api

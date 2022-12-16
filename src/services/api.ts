import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_BASEURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  },
})

export default api

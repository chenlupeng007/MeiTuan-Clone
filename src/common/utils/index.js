import axios from 'axios'
const sign = 'ddc923730c05fd69e621b9e36538d547'

export const serverInstance = axios.create({
  baseURL: 'http://cp-tools.cn/',
  timeout: 2000,
  params: {
      sign
    }
})

export const clientInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 2000
})
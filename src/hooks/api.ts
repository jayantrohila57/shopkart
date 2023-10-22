// eslint-disable-next-line import/no-extraneous-dependencies
import axios, { Method } from 'axios'

import { IProduct } from '@/types'

export interface ApiRequestConfig {
  method: Method
  route: string
  payload?: object | IProduct
}

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL,
  timeout: 5000, // Adjust as needed
})

const API = async (config: ApiRequestConfig) => {
  try {
    const { method, route, payload } = config
    const response = await api.request({
      method,
      url: route,
      data: payload,
    })
    return response.data
  } catch (error) {
    return error
  }
}

export default API

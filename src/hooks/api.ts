import { IAddToCart } from '@/types'

const apiUrl: string = process.env.NEXT_PUBLIC_URL as string

interface FetchDataOptions {
  method: string
  data?: object | null
}

async function fetchData(url: string, options: FetchDataOptions = { method: 'GET', data: null }) {
  const response = await fetch(apiUrl + url, {
    method: options.method,
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
    body: JSON.stringify(options.data),
  })
  return response.json()
}

export async function getProductList() {
  return fetchData('/api/product', { method: 'GET' })
}

export async function getCartData() {
  return fetchData('/api/cart', { method: 'GET' })
}

export async function refetchGetCartData() {
  return getCartData()
}

export async function getProductById(_id: string) {
  return fetchData(`/api/product/${_id}`, { method: 'GET', data: { _id } })
}

export async function deleteCartProduct(_id: string, productId: string) {
  return fetchData('/api/cart', { method: 'DELETE', data: { _id, productId } })
}

export async function addToCart({ _id, product, quantity }: IAddToCart) {
  return fetchData('/api/cart', { method: 'PUT', data: { _id, product, quantity } })
}

export async function decreaseProductQuantity({ _id, product, quantity }: IAddToCart) {
  return fetchData('/api/cart', { method: 'PUT', data: { _id, product, quantity } })
}
export async function increaseProductQuantity({ _id, product, quantity }: IAddToCart) {
  return fetchData('/api/cart', { method: 'PUT', data: { _id, product, quantity } })
}

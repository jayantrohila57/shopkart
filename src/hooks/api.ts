import { IAddToCart } from '@/types'

export async function getProductList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/product`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  if (!res.ok) {
    throw new Error('Failed to get product list')
  }
  return res.json()
}

export async function getCartData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/cart`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  if (!res.ok) {
    throw new Error('Failed to get cart data')
  }
  return res
}

export async function getProductById({ _id }: { _id: string }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/product/${_id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ _id }),
  })
  if (!res.ok) {
    throw new Error('Failed to get product id')
  }
  return res.json()
}

export async function deleteCartProduct({ _id, productId }: { _id: string; productId: string }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/cart`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ _id, productId }),
  })
  if (!res.ok) {
    throw new Error('Failed to delete product ')
  }
  return res.json()
}

export async function addToCart({ _id, product, quantity }: IAddToCart) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/cart`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ _id, product, quantity }),
  })
  if (!res.ok) {
    throw new Error('Failed to Add product ')
  }
  return res.json()
}

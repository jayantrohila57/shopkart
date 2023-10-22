export async function getProductList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/product`)
  if (!res.ok) {
    throw new Error('Failed to get product list')
  }
  return res.json()
}

export async function getCartData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/cart`)
  if (!res.ok) {
    throw new Error('Failed to get cart data')
  }
  return res.json()
}

export async function getProductById({ _id }: { _id: string }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/product/${_id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ _id }),
  })
  if (!res.ok) {
    throw new Error('Failed to get product id')
  }
  return res.json()
}

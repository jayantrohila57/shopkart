import React from 'react'

import ProductsList from '@/components/product/productList'
import { IProduct } from '@/types'

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/product`, { cache: 'force-cache' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const Home: React.FC = async () => {
  const data = await getData()
  const products: IProduct[] = data?.product
  return <ProductsList products={products} />
}
export default Home

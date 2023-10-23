import React from 'react'

import ProductsList from '@/components/product/productList'
import { getProductList } from '@/hooks/api'
import { IProduct } from '@/types'

const Home: React.FC = async () => {
  const data = await getProductList()
  console.log(data)
  const products: IProduct[] = data?.product
  return <ProductsList products={products} />
}
export default Home

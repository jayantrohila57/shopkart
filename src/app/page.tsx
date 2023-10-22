import React from 'react'

import ProductsList from '@/components/product/productList'
import API from '@/hooks/api'
import { IProduct } from '@/types'

const Home: React.FC = async () => {
  const response = await API({
    method: 'GET',
    route: '/api/product',
  })
  const products: IProduct[] = response?.product
  return <ProductsList products={products} />
}
export default Home

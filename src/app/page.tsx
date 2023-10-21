import React from 'react'

import ProductsList from '@/components/product/productList'
import data from '@/data/products.json'

const Home: React.FC = async () => <ProductsList products={data} />
export default Home

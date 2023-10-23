'use client'

import React, { useEffect, useState } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { toast, Toaster } from 'sonner'

import ProductsList from '@/components/product/productList'
import { getProductList } from '@/hooks/api'
import { IProduct } from '@/types'

function Home() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  function Failed() {
    toast.error('Error! Network Problem')
  }

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const data: { product: IProduct[] } = await getProductList()
      setProducts(data.product || [])
    } catch (err) {
      Failed()
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      <Toaster richColors />
      {loading ? <p>Loading...</p> : <ProductsList products={products} />}
    </div>
  )
}

export default Home

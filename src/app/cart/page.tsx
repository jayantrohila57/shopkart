'use client'

import React, { useEffect, useState } from 'react'

import CartCheckout from '@/components/cart/cartCheckout'
import Cartlist from '@/components/cart/cartlist'
import { getCartData } from '@/hooks/api'
import { ICart } from '@/types'

function Page() {
  const [cart, setCart] = useState<ICart | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<unknown>(null)

  const fetchData = async () => {
    try {
      const cartData: ICart = await getCartData()
      setCart(cartData)
      setLoading(false)
    } catch (err) {
      setError(err)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleRefresh = () => {
    setLoading(true)
    setError(null)
    fetchData()
  }

  if (loading) {
    return <div className="text-center">Loading your cart...</div>
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error
        <button type="button" onClick={handleRefresh}>
          Refresh
        </button>
      </div>
    )
  }

  if (!cart) {
    return (
      <div className="text-center">
        No data available.
        <button type="button" onClick={handleRefresh}>
          Refresh
        </button>
      </div>
    )
  }

  const { _id, products, totalAmount, totalItems } = cart

  return (
    <section className="bg-white mt-10 max-w-5xl mx-auto">
      <div className="mb-6">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 lg:text-3xl">Your Cart</h2>
      </div>
      <div className="grid md:grid-cols-12 gap-5 grid-cols-4">
        {cart && <Cartlist refetch={handleRefresh} products={products} cartId={_id} />}
        {cart && <CartCheckout totalAmount={totalAmount} totalItems={totalItems} />}
      </div>
    </section>
  )
}

export default Page

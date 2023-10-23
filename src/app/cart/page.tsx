'use client'

import React, { useEffect, useState } from 'react'

import Cartlist from '@/components/cart/cartlist'
import { getCartData } from '@/hooks/api'
import { ICart } from '@/types'

function Page() {
  const [cart, setCart] = useState<ICart | null>(null)
  const [error, setError] = useState<unknown>(null)
  const [data, setdata] = useState<{ totalAmount: number; totalItems: number }>({
    totalAmount: 0,
    totalItems: 0,
  })
  const fetchData = async () => {
    try {
      const cartData: ICart = await getCartData()
      setCart(cartData)
      setdata({
        totalAmount: cartData?.totalAmount,
        totalItems: cartData?.totalItems,
      })
    } catch (err) {
      setError(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleRefresh = () => {
    fetchData()
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500">
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

  // Move these assignments inside the if (!cart) block to ensure they get updated on every refetch.
  const { _id, products } = cart

  return (
    <section className="bg-white mt-10 max-w-5xl mx-auto">
      <div className="mb-6">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 lg:text-3xl">Your Cart</h2>
      </div>
      <div className="grid md:grid-cols-12 gap-5 grid-cols-4">
        {cart && <Cartlist refetch={handleRefresh} products={products} cartId={_id} />}
        {cart && (
          <div className="flex col-span-4 flex-col items-end gap-4">
            <div className="w-full rounded-lg bg-gray-100 p-4 sm:max-w-xs">
              <div className="space-y-1">
                <div className="flex justify-between gap-4 text-gray-900">
                  <span>Total items</span>
                  <span>{data?.totalItems}</span>
                </div>
              </div>
              <div className="mt-4 border-t pt-4">
                <div className="flex items-start justify-between gap-4 text-gray-900">
                  <span className="text-lg font-bold">Total</span>
                  <span className="flex flex-col items-end">
                    <span className="text-lg font-bold">${data?.totalAmount}</span>
                    <span className="text-sm text-gray-500">including VAT</span>
                  </span>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="inline-block rounded-lg bg-gray-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-600 focus-visible:ring active-bg-gray-700 md:text-base"
            >
              Check out
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Page

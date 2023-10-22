// components/Cart.js

import React from 'react'

import CartItem from './CartItem'

interface Product {
  name: string
  size: string
  color: string
  price: string
  inStock: boolean
  link: string
  image: string
  quantity: number
}

type TCart = {
  products: Product[]
  subtotal: string
  shipping: string
  total: string
}
const Cart = async ({ products, subtotal, shipping, total }: TCart) => {
  return (
    <div className="bg-white mt-10  max-w-5xl mx-auto">
      <div className="mb-6 sm:mb-10 lg:mb-16">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Your Cart</h2>
      </div>
      <div className="grid md:grid-cols-12 grid-cols-4">
        <div className="mb-5 md:col-span-8 max-w-2xl col-span-4 flex flex-col sm:mb-8 sm:divide-y sm:border-t sm:border-b">
          {products.map((product: Product) => (
            <CartItem key={product.name} product={product} />
          ))}
        </div>
        <div className="flex col-span-4 flex-col items-end gap-4">
          <div className="w-full rounded-lg bg-gray-100 p-4 sm:max-w-xs">
            <div className="space-y-1">
              <div className="flex justify-between gap-4 text-gray-500">
                <span>Subtotal</span>
                <span>{subtotal}</span>
              </div>
              <div className="flex justify-between gap-4 text-gray-500">
                <span>Shipping</span>
                <span>{shipping}</span>
              </div>
            </div>
            <div className="mt-4 border-t pt-4">
              <div className="flex items-start justify-between gap-4 text-gray-800">
                <span className="text-lg font-bold">Total</span>
                <span className="flex flex-col items-end">
                  <span className="text-lg font-bold">{total}</span>
                  <span className="text-sm text-gray-500">including VAT</span>
                </span>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active-bg-indigo-700 md:text-base"
          >
            Check out
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart

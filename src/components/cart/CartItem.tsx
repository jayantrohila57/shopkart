// components/CartItem.js

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartItem = async ({ product }) => {
  return (
    <div className="py-5 sm:py-8">
      <div className="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
        <div className="sm:-my-2.5">
          <Link href={product.link}>
            <div className="group relative block h-24 w-24 overflow-hidden rounded-lg bg-gray-100 sm:h-40 sm:w-40">
              <Image
                src={product.image}
                alt={product.name}
                layout="responsive"
                width={300}
                height={300}
                loading="lazy"
                className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </div>
          </Link>
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div>
            <Link href={product.link}>
              <div className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">
                {product.name}
              </div>
            </Link>
            <span className="block text-gray-500">Size: {product.size}</span>
            <span className="block text-gray-500">Color: {product.color}</span>
          </div>

          <div>
            <span className="mb-1 block font-bold text-gray-800 md:text-lg">{product.price}</span>
            <span className="flex items-center gap-1 text-sm text-gray-500">
              {product.inStock && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              )}
              {product.inStock ? 'In stock' : 'Out of stock'}
            </span>
          </div>
        </div>

        <div className="flex w-full justify-between border-t pt-4 sm:w-auto sm:border-none sm:pt-0">
          <div className="flex flex-col items-start gap-2">
            <div className="flex h-12 w-20 overflow-hidden rounded border">
              <input
                type="number"
                value={product.quantity}
                className="w-full px-4 py-2 outline-none ring-inset ring-indigo-300 transition duration-100 focus:ring"
              />
              <div className="flex flex-col divide-y border-l">
                <button
                  type="button"
                  className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                >
                  +
                </button>
                <button
                  type="button"
                  className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                >
                  -
                </button>
              </div>
            </div>
            <button
              type="button"
              className="select-none text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
            >
              Delete
            </button>
          </div>
          <div className="ml-4 pt-3 sm:pt-2 md:ml-8 lg:ml-16">
            <span className="block font-bold text-gray-800 md:text-lg">{product.price}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem

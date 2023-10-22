import Image from 'next/image'
import React from 'react'

import { ICartProduct } from '@/types'

function Cartlist({ products }: { products: ICartProduct[] }) {
  return (
    <div className="mb-5 md:col-span-8 max-w-2xl col-span-4 flex flex-col sm:mb-8 sm:divide-y sm:border-t sm:border-b">
      {products?.map(({ product, quantity }: ICartProduct) => {
        return (
          <div className="my-1 border-2 rounded-lg p-5">
            <div className="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
              <div className="sm:-my-2.5">
                <div className="group relative block h-24 w-24 overflow-hidden rounded-lg bg-gray-100 sm:h-40 sm:w-40">
                  <Image
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    fill
                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <div className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">
                    {product.name}
                  </div>
                  <span className="block text-gray-500 text-sm md:text-lg">{product.description}</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="block text-gray-500 text-sm md:text-lg">Size: {product.size}</span>
                  <span className="block text-gray-500 text-sm md:text-lg">Color: {product.color}</span>
                </div>
              </div>
              <div className="flex w-full md:flex-col flex-row  justify-between border-t pt-4 sm:w-auto sm:border-none sm:pt-0">
                <div className="flex flex-col justify-center items-start">
                  <div className="flex flex-row ">
                    <span className="mb-1 block font-bold text-gray-800 md:text-lg">${product.price}</span>
                  </div>
                  <button
                    type="button"
                    className="select-none text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Delete
                  </button>
                </div>

                <div className="flex flex-col items-start gap-2">
                  <div className="flex h-12 w-20 rounded border">
                    <input
                      type="text"
                      value={quantity}
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
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Cartlist
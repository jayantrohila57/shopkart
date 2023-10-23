import Image from 'next/image'
import React from 'react'

import { IProduct } from '@/types'

import AddToCart from './addToCartButton'

function ProductsList({ products }: { products: IProduct[] }) {
  return (
    <div className="mx-auto w-full mt-10">
      <div className="py-10">
        <p className="mb-2 font-semibold text-indigo-500 md:mb-3 lg:text-lg">Shopping</p>
        <h2 className="mb-4 text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">View Our best products.</h2>
        <p className="max-w-screen-md text-gray-500 md:text-lg">
          This is a section of some simple filler text, also known as placeholder text. It shares some
          characteristics of a real written text but is random or otherwise generated.
        </p>
      </div>
      <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
        {products?.map(({ _id, color, image, name, price, description, size }) => (
          <div key={_id}>
            <div className="group relative my-4 mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
              <Image
                src={image}
                loading="lazy"
                alt={name}
                fill
                className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </div>

            <div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                  <h2 className="hover:gray-800 mb-1 text-2xl font-semibold text-gray-700 transition duration-100 lg:text-lg">
                    {name}
                  </h2>
                  <h2 className="hover:gray-800 mb-1 text-3xl text-gray-700 font-bold transition duration-100 lg:text-lg">
                    ${price}
                  </h2>
                </div>
                <div className="flex flex-row gap-2 text-sm text-gray-700 ">
                  <p className="border-[1px] px-2 rounded-full p-1 bg-gray-200">Color {color}</p>
                  <p className="border-[1px] px-2 rounded-full p-1 bg-gray-200">Size {size}</p>
                </div>
                <p className="text-gray-500 text-xs my-1">{description}</p>
              </div>
              {_id && (
                <AddToCart
                  _id="1485b5fe-f509-47f2-9095-751e8aa24ca3"
                  product={{ _id, color, image, name, price, description, size }}
                  quantity={1}
                  key={_id}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsList

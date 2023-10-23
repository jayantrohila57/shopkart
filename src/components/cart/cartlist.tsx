'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { toast, Toaster } from 'sonner'

import { decreaseProductQuantity, increaseProductQuantity } from '@/hooks/api'
import { ICartProduct, IProduct } from '@/types'

import DeleteProduct from './deleteProductButton'

function Cartlist({
  products,
  cartId,
  refetch,
}: {
  products: ICartProduct[]
  cartId: string
  refetch: () => void
}) {
  const [isDisabled, setIsDisabled] = useState(false)

  function Success() {
    toast.success('Product Removed from Cart.')
    setTimeout(() => {
      refetch()
    }, 1000)
  }

  // Function to handle increment
  const handleIncrement = async (product: IProduct, quantity: number) => {
    if (isDisabled) return // Do nothing if disabled
    setIsDisabled(true) // Disable the buttons
    await increaseProductQuantity({ _id: cartId, product, quantity })
    Success()
  }

  // Function to handle decrement
  const handleDecrement = async (product: IProduct, quantity: number) => {
    if (isDisabled) return // Do nothing if disabled
    setIsDisabled(true) // Disable the buttons
    await decreaseProductQuantity({ _id: cartId, product, quantity })
    Success()
  }
  // Use useEffect to reset isDisabled after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDisabled(false)
    }, 1000) // 1000ms = 1 second
    return () => clearTimeout(timer)
  }, [isDisabled])

  return (
    <div className="mb-5 md:col-span-8 max-w-2xl h-auto md:pr-2 pr-0 md:h-[60vh] overflow-auto col-span-4 flex flex-col sm:mb-8  ">
      {products?.length < 1 && (
        <div className="h-full w-full flex justify-center items-center">
          Your cart is empty; add products.
        </div>
      )}
      <Toaster richColors />
      {products.length > 0 &&
        products?.map(({ product, quantity }: ICartProduct) => {
          const productId = product?._id

          return (
            <div key={productId} className="my-1 border-2 rounded-lg p-5">
              <div className="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
                <div className="sm:-my-2.5">
                  <div className="group relative block h-24 w-24 overflow-hidden rounded-lg bg-gray-100 sm:h-40 sm:w-40">
                    <Image
                      src={product?.image}
                      alt={product?.name}
                      loading="lazy"
                      fill
                      className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify between">
                  <div>
                    <div className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">
                      {product?.name}
                    </div>
                    <span className="block text-gray-500 text-sm md:text-lg">{product?.description}</span>
                  </div>
                  <div className="flex flex-row gap-2">
                    <span className="block text-gray-500 text-sm md:text-lg">Size: {product?.size}</span>
                    <span className="block text-gray-500 text-sm md:text-lg">Color: {product?.color}</span>
                  </div>
                </div>
                <div className="flex w-full md:flex-col flex-row  justify-between border-t pt-4 sm:w-auto sm:border-none sm:pt-0">
                  <div className="flex flex-col justify-center items-start">
                    <div className="flex flex-row">
                      <span className="mb-1 block font-bold text-gray-800 md:text-lg">${product?.price}</span>
                    </div>
                    <DeleteProduct
                      refetch={refetch}
                      _id={cartId}
                      productId={product?._id}
                      key={product?._id}
                    />
                  </div>

                  <div className="flex flex-col items-start gap-2">
                    <div className="flex h-12 w-20 rounded border">
                      <input
                        type="text"
                        readOnly
                        value={quantity}
                        className="w-full text-black px-4 py-2 outline-none  transition duration-100 "
                      />

                      <div className="flex flex-col divide-y border-l">
                        <button
                          type="button"
                          onClick={() => handleIncrement(product, quantity + 1)}
                          className={`flex w-6 text-black flex-1 select-none items-center justify-center bg-white disabled:text-gray-100 leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200 ${
                            isDisabled ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                          disabled={quantity < 1} // Disable if quantity is less than 1
                        >
                          +
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDecrement(product, quantity - 1)}
                          className={`flex w-6 text-black flex-1 select-none items-center justify-center disabled:text-gray-100 bg-white leading-none transition duration-100 hover:bg-gray-100 active-bg-gray-200 ${
                            isDisabled ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                          disabled={quantity < 2} // Disable if quantity is less than 2
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

'use client'

import React from 'react'

import { addToCart, refetchGetCartData } from '@/hooks/api'
import { IAddToCart } from '@/types'

function AddToCart({ _id, product, quantity }: IAddToCart) {
  const handleAddToCart = async () => {
    try {
      const res = await addToCart({ _id, product, quantity })
      refetchGetCartData()
      return res
    } catch (error) {
      return error
    }
  }
  return (
    <button
      type="button"
      className="text-black w-full mt-2 py-4 transition-all duration-300 text-base ease-in-out hover:bg-indigo-700 bg-gray-300 active:scale-95 px-4  rounded-lg"
      onClick={handleAddToCart}
    >
      Add to cart
    </button>
  )
}

export default AddToCart

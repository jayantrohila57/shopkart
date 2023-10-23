'use client'

import React, { useState } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { toast, Toaster } from 'sonner'

import { addToCart } from '@/hooks/api'
import { IAddToCart } from '@/types'

function AddToCart({ _id, product, quantity }: IAddToCart) {
  const [isDisabled, setIsDisabled] = useState(false)

  function success() {
    toast.success('Product Added to Cart.')
  }
  function failed() {
    toast.error('Error! Product Not Added in Cart')
  }
  const handleAddToCart = async () => {
    if (isDisabled) {
      return // Don't allow multiple clicks while disabled.
    }

    // Set the button to disabled while processing.
    setIsDisabled(true)

    try {
      await addToCart({ _id, product, quantity })
      success()
    } catch (error) {
      failed()
    } finally {
      // Enable the button after 1 second (1000 milliseconds).
      setTimeout(() => {
        setIsDisabled(false)
      }, 1000)
    }
  }

  return (
    <div>
      <Toaster richColors />

      <button
        type="button"
        className="text-black hover:text-white font-semibold w-full mt-2 py-4 transition-all duration-300 text-base ease-in-out hover:bg-indigo-700 bg-gray-300 active:scale-95 px-4 rounded-lg"
        onClick={handleAddToCart}
        disabled={isDisabled}
      >
        {isDisabled ? 'Adding to cart...' : 'Add to cart'}
      </button>
    </div>
  )
}

export default AddToCart

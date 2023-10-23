'use client'

import React, { useState } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { toast, Toaster } from 'sonner'

import { deleteCartProduct } from '@/hooks/api'

function DeleteProduct({ _id, productId, refetch }: { _id: string; productId: string; refetch: () => void }) {
  const [isDisabled, setIsDisabled] = useState(false)

  function success() {
    toast.success('Product Removed from Cart.')
  }
  function failed() {
    toast.error('Error! Product Not removed from Cart')
  }

  const handleDelete = async () => {
    if (isDisabled) {
      return
    }

    setIsDisabled(true)

    try {
      await deleteCartProduct({ _id, productId })
      success()
    } catch (error) {
      failed()
    } finally {
      setTimeout(() => {
        refetch()
        setIsDisabled(false)
      }, 1000)
    }
  }

  return (
    <div className="">
      <Toaster richColors />
      <button
        type="button"
        className={`select-none text-sm font-semibold transition duration-100 hover:text-red-700 active:scale-95 ${
          isDisabled ? 'text-gray-400 cursor-not-allowed' : 'text-red-500'
        }`}
        onClick={handleDelete}
        disabled={isDisabled}
      >
        {isDisabled ? 'Removing...' : 'Remove'}
      </button>
    </div>
  )
}

export default DeleteProduct

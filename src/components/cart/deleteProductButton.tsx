'use client'

import React from 'react'

import { deleteCartProduct } from '@/hooks/api'

function DeleteProduct({ _id, productId }: { _id: string; productId: string }) {
  const handleDelete = async () => {
    try {
      return await deleteCartProduct({ _id, productId })
    } catch (error) {
      return error
    }
  }
  return (
    <button
      type="button"
      className="select-none text-sm font-semibold text-red-500 transition duration-100 hover:text-red-700 active:scale-95"
      onClick={handleDelete}
    >
      Remove
    </button>
  )
}

export default DeleteProduct

'use client'

import React from 'react'

import { deleteCartProduct } from '@/hooks/api'

function DeleteProduct({ _id, productId, refetch }: { _id: string; productId: string; refetch: () => void }) {
  const handleDelete = async () => {
    try {
      const res = await deleteCartProduct({ _id, productId })
      refetch()
      return res
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

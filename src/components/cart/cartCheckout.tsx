import React from 'react'

function CartCheckout({ totalItems, totalAmount }: { totalItems: number; totalAmount: number }) {
  return (
    <div className="flex col-span-4 flex-col items-end gap-4">
      <div className="w-full rounded-lg bg-gray-100 p-4 sm:max-w-xs">
        <div className="space-y-1">
          <div className="flex justify-between gap-4 text-gray-900">
            <span>Total items</span>
            <span>{totalItems}</span>
          </div>
        </div>
        <div className="mt-4 border-t pt-4">
          <div className="flex items-start justify-between gap-4 text-gray-900">
            <span className="text-lg font-bold">Total</span>
            <span className="flex flex-col items-end">
              <span className="text-lg font-bold">${totalAmount}</span>
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
  )
}

export default CartCheckout

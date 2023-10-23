// 'use client'

// import React, { useEffect, useState } from 'react'

// import { getCartData } from '@/hooks/api'
// import { ICart } from '@/types'

function CartButton() {
  // const [cartQuantity, setCartQuantity] = useState(0)

  // const fetchCartData = async () => {
  //   try {
  //     const cartData: ICart = await getCartData()
  //     const { totalItems } = cartData
  //     setCartQuantity(totalItems)
  //   } catch (error) {
  //     console.error('Error fetching cart data:', error)
  //   }
  // }

  // useEffect(() => {
  //   // Initial fetch
  //   fetchCartData()

  //   // // Periodically update cart data and quantity
  //   // const interval = setInterval(() => {
  //   //   fetchCartData()
  //   // }, 5000)

  //   // return () => clearInterval(interval)
  // }, [])
  return (
    <button type="button" className="text-black hover:text-indigo-500 relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
      {/* {cartQuantity > 0 && (
        <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center absolute top-0 right-0">
          {cartQuantity}
        </span>
      )} */}
    </button>
  )
}

export default CartButton

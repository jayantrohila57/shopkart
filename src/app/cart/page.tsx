import React from 'react'

import CartCheckout from '@/components/cart/cartCheckout'
import Cartlist from '@/components/cart/cartlist'
import { getCartData } from '@/hooks/api'
import { ICart } from '@/types'

const Page: React.FC = async () => {
  const data = await getCartData()
  const cart = await data.json()

  const { _id, products, totalAmount, totalItems }: ICart = cart[0]
  return (
    <section className="bg-white mt-10  max-w-5xl mx-auto">
      <div className="mb-6 ">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800   lg:text-3xl">Your Cart</h2>
      </div>
      <div className="grid md:grid-cols-12 gap-5 grid-cols-4">
        {products && <Cartlist products={products} cartId={_id} />}
        {cart && <CartCheckout totalAmount={totalAmount} totalItems={totalItems} />}
      </div>
    </section>
  )
}
export default Page

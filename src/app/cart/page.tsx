import React from 'react'

import Cart from '@/components/cart/cart'

const Page: React.FC = async () => {
  const subtotal = '$129.99'
  const shipping = '$4.99'
  const total = '$134.98 USD'
  const products = [
    {
      name: 'Top',
      size: 'S',
      color: 'White',
      price: '$15.00',
      inStock: true,
      link: '/product/top', // Replace with the actual product URL
      image: 'https://images.unsplash.com/photo-1612681621979-fffe5920dbe8?auto=format&q=75&fit=crop&w=200',
      quantity: 1,
    },
    {
      name: 'Jacket',
      size: 'M',
      color: 'Black',
      price: '$65.00',
      inStock: true,
      link: '/product/jacket', // Replace with the actual product URL
      image: 'https://images.unsplash.com/photo-1542327897-4141b355e20e?auto=format&q=75&fit=crop&w=200',
      quantity: 1,
    },
    {
      name: 'Business suit',
      size: 'S',
      color: 'Black',
      price: '$49.99',
      inStock: true,
      link: '/product/business-suit', // Replace with the actual product URL
      image: 'https://images.unsplash.com/photo-1590926938512-c0d7e5c39abd?auto=format&q=75&fit=crop&w=200',
      quantity: 1,
    },
  ]
  return <Cart products={products} subtotal={subtotal} shipping={shipping} total={total} />
}
export default Page

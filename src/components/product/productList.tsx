import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Product {
  id: number
  name: string
  image: string
  price: number
  discountedPrice?: number
}
interface ProductsProps {
  products: Product[]
}

const ProductsList: React.FC<ProductsProps> = async ({ products }) => {
  return (
    <div className="mx-auto w-full mt-10">
      <div className="py-10">
        <p className="mb-2 font-semibold text-indigo-500 md:mb-3 lg:text-lg">Shopping</p>
        <h2 className="mb-4 text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">View Our best products.</h2>
        <p className="max-w-screen-md text-gray-500 md:text-lg">
          This is a section of some simple filler text, also known as placeholder text. It shares some
          characteristics of a real written text but is random or otherwise generated.
        </p>
      </div>
      <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div key={product.id}>
            <div className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
              <Image
                src={product.image}
                loading="lazy"
                alt={product.name}
                fill
                className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              {product.discountedPrice && (
                <span className="absolute left-0 top-0 rounded-br-lg bg-indigo-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                  sale
                </span>
              )}
            </div>

            <div>
              <div className="flex justify-between flex-row">
                <h2 className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">
                  {product.name}
                </h2>
                <button
                  type="button"
                  className="text-white transition-all duration-300 text-base ease-in-out hover:bg-indigo-700 bg-indigo-500 active:scale-95 px-2 py-1 rounded-lg"
                  // onClick={() => {
                  //   // Handle cart button click
                  // }}
                >
                  Add to cart
                </button>
              </div>

              <div className="flex items-end gap-2">
                <span className="font-bold text-gray-800 lg:text-lg">${product.price.toFixed(2)}</span>
                {product.discountedPrice && (
                  <span className="mb-0.5 text-red-500 line-through">
                    ${product.discountedPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Selected</h2>
        <Link
          href="/"
          className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
        >
          Show more
        </Link>
      </div>
    </div>
  )
}

export default ProductsList

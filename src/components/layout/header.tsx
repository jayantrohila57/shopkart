import Link from 'next/link'

import CartButton from '../cart/cartButton'

export default function Header() {
  return (
    <header className="w-full z-50 fixed bg-white shadow-sm px-5 md:px-0">
      <div className="flex items-center justify-between max-w-7xl container mx-auto px-5 py-4 md:py-4">
        <Link href="/">
          <p
            className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
            aria-label="logo"
          >
            ShopKart
          </p>
        </Link>

        <Link href="/cart" className="">
          {/* Add your cart button here */}
          <CartButton />
        </Link>
      </div>
    </header>
  )
}

import Link from 'next/link'

import CartButton from '../cart/cartButton'

interface LinkProps {
  text: string
  url: string
}

export default function Header({ links }: { links: LinkProps[] }) {
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
        <nav className="hidden gap-12 max-w-md lg:flex justify-between flex-1">
          {links.map((link) => (
            <Link key={link.text} href={link.url}>
              <p className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">
                {link.text}
              </p>
            </Link>
          ))}
        </nav>

        <Link href="/cart" className="">
          {/* Add your cart button here */}
          <CartButton />
        </Link>
      </div>
    </header>
  )
}

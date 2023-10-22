'use client'

import Link from 'next/link'
// import React, { useState } from 'react'

interface LinkProps {
  text: string
  url: string
}

export default function Header({ links }: { links: LinkProps[] }) {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
        {/* <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Menu
        </button> */}
        <Link href="/cart" className="">
          {/* Add your cart button here */}
          <button
            type="button"
            className="text-black hover:text-indigo-500"
            onClick={() => {
              // Handle cart button click
            }}
          >
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
          </button>
        </Link>
      </div>
      {/* {isMobileMenuOpen && (
        <div className="lg:hidden">
          <nav className="flex flex-col gap-4">
            {links?.map((link) => (
              <Link key={link.text} href={link.url}>
                <p className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">
                  {link.text}
                </p>
              </Link>
            ))}
          </nav>
        </div>
      )} */}
    </header>
  )
}

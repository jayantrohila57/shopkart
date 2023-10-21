import './globals.css'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import React from 'react'

import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import footer from '@/data/footer.json'
import header from '@/data/header.json'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['devanagari', 'latin', 'latin-ext'],
})

export const metadata: Metadata = {
  title: 'ShopKart',
  description: 'ShopKart Buy your fav products.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="min-h-screen bg-background font-sans antialiased">
      <body className={poppins.className}>
        <Header links={header} />
        <main className="max-w-7xl min-h-screen pt-10 mx-auto px-5 md:px-0">{children}</main>
        <Footer links={footer} />
      </body>
    </html>
  )
}

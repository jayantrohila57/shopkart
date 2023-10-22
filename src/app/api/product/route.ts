import { NextResponse } from 'next/server'

import data from '@/data/cartProduct.json'

interface Product {
  name: string
  size: string
  color: string
  price: string
  inStock: boolean
  link: string
  image: string
  quantity: number
}
export async function GET() {
  try {
    const product: Product[] = data
    return NextResponse.json(
      {
        message: 'ok',
        product,
      },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      },
    )
  } catch (err) {
    return NextResponse.json(
      {
        message: 'Error',
        err,
      },
      { status: 500 },
    )
  }
}

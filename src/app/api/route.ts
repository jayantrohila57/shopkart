import { NextResponse } from 'next/server'

import connectToDatabase from '@/lib/db'

const routes = {
  home: {
    GET_SERVER_STATUS: '/api/',
  },
  product: {
    GET_PRODUCTS_LIST: '/api/product',
    POST_CREATE_PRODUCT: '/api/product',
  },
  cart: {},
}

export async function GET() {
  const connect = await connectToDatabase()
  try {
    return NextResponse.json(
      {
        message: connect.message,
        routes,
      },
      {
        status: 200,
      },
    )
  } catch (err) {
    return NextResponse.json(
      { message: connect.message },
      {
        status: 500,
      },
    )
  }
}

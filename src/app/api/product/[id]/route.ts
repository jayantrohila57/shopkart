/* eslint-disable import/no-extraneous-dependencies */
import { NextResponse } from 'next/server'

import connectToDatabase from '@/lib/db'
import Product from '@/models/product'

export async function GET(req: Request) {
  const _id = req.url.split('/product/')[1]
  try {
    await connectToDatabase()

    const product = await Product?.findById({ _id })
    return NextResponse.json(
      {
        message: `Products found`,
        success: true,
        product,
      },
      {
        status: 200,
      },
    )
  } catch (err) {
    return NextResponse.json(
      {
        message: 'Error',
        success: false,
        err,
      },
      { status: 500 },
    )
  }
}

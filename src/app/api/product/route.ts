/* eslint-disable import/no-extraneous-dependencies */
import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

import connectToDatabase from '@/lib/db'
import Product from '@/models/product'
import { IProduct } from '@/types'

export async function GET() {
  try {
    await connectToDatabase()
    const product: IProduct[] = await Product.find()
    return NextResponse.json(
      {
        message: `Total products available: ${product?.length}`,
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

export async function POST(req: Request) {
  try {
    const { name, size, color, price, image, description }: IProduct = await req.json()
    await connectToDatabase()
    const id = uuidv4()
    const data = await Product.create({
      _id: id,
      name,
      size,
      color,
      price,
      image,
      description,
    })
    return NextResponse.json(
      {
        message: `Product inserted successfully: ${data?._id}`,
        success: true,
        data,
      },
      {
        status: 200,
      },
    )
  } catch (err) {
    return NextResponse.json(
      {
        message: 'Error Product insert failed!',
        success: false,
        err,
      },
      { status: 500 },
    )
  }
}

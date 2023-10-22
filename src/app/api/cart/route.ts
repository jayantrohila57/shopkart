/* eslint-disable import/no-extraneous-dependencies */
import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

import connectToDatabase from '@/lib/db'
import Cart from '@/models/cart'
import { ICart } from '@/types'

export async function GET() {
  try {
    await connectToDatabase()
    const cart: ICart[] = await Cart.find()
    return NextResponse.json(
      {
        message: 'Ok',
        success: true,
        cart: cart[0],
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
    const { products, totalAmount, totalItems }: ICart = await req.json()
    await connectToDatabase()
    const id = uuidv4()
    const data = await Cart.create({
      _id: id,
      products,
      totalAmount,
      totalItems,
    })
    return NextResponse.json(
      {
        message: 'Cart Created successfully',
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
        message: 'Error Cart insert failed!',
        success: false,
        err,
      },
      { status: 500 },
    )
  }
}

export async function PUT(request: Request) {
  try {
    const { _id, product, quantity } = await request.json()
    await connectToDatabase()
    const data = await Cart.findOneAndUpdate({ _id }, { $push: { products: { product, quantity } } })
    return NextResponse.json(
      {
        message: 'Cart updated successfully',
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
        message: 'Error Cart update failed!',
        success: false,
        err,
      },
      { status: 500 },
    )
  }
}
export async function DELETE(request: Request) {
  try {
    const { _id, productId } = await request.json()
    await connectToDatabase()
    const data = await Cart.findOneAndUpdate({ _id }, { $pull: { products: { 'product._id': productId } } })

    return NextResponse.json(
      {
        message: 'Product deleted successfully',
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
        message: 'Error Product delete update failed!',
        success: false,
        err,
      },
      { status: 500 },
    )
  }
}

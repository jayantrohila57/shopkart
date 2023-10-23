/* eslint-disable import/no-extraneous-dependencies */
import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

import connectToDatabase from '@/lib/db'
import Cart from '@/models/cart'
import { IAddToCart, ICart, ICartProduct } from '@/types'

export async function GET(): Promise<NextResponse> {
  const _id: string = 'd36908b4-eb7f-4309-adac-736ab4d4a3ef'

  try {
    await connectToDatabase()
    const cart: ICart | null = await Cart.findById({ _id })

    if (!cart) {
      return NextResponse.json('Cart not found!', { status: 404 })
    }
    const totalAmount: number = cart.products.reduce(
      (total: number, item: ICartProduct) => total + item.product.price * item.quantity,
      0,
    )
    const totalItems: number = cart.products.reduce(
      (total: number, item: ICartProduct) => total + item.quantity,
      0,
    )
    await Cart.findOneAndUpdate({ _id }, { $set: { totalAmount, totalItems } })
    return NextResponse.json(cart, {
      status: 200,
    })
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
    const cart = await Cart.findOne({ _id })
    if (!cart) {
      return NextResponse.json('Cart not found!', { status: 404 })
    }

    const existingProduct = cart.products.find(
      (item: IAddToCart) => item.product._id === product._id && item.quantity === quantity,
    )
    if (existingProduct) {
      return NextResponse.json('Product Alreaded added', { status: 201 })
    }

    const productQuantity = cart.products.find((item: IAddToCart) => item.product._id === product._id)

    if (productQuantity) {
      if (quantity >= 1) {
        await Cart.findOneAndUpdate(
          { _id, 'products.product._id': product._id },
          { $set: { 'products.$.quantity': quantity } },
        )
        const totalAmount: number = cart.products.reduce(
          (total: number, item: ICartProduct) => total + item.product.price * item.quantity,
          0,
        )
        const totalItems: number = cart.products.reduce(
          (total: number, item: ICartProduct) => total + item.quantity,
          0,
        )
        await Cart.findOneAndUpdate({ _id }, { $set: { totalAmount, totalItems } })
        return NextResponse.json('Quantity updated', { status: 201 })
      }
      return NextResponse.json('Quantity cannot be updated to a zero', { status: 400 })
    }

    await Cart.findOneAndUpdate({ _id }, { $push: { products: { product, quantity } } })
    const update = await Cart.findOne({ _id })
    // Calculate totalAmount and totalItems
    const totalAmount: number = update.products.reduce(
      (total: number, item: ICartProduct) => total + item.product.price * item.quantity,
      0,
    )
    const totalItems: number = update.products.reduce(
      (total: number, item: ICartProduct) => total + item.quantity,
      0,
    )
    await Cart.findOneAndUpdate({ _id }, { $set: { totalAmount, totalItems } })
    return NextResponse.json('Product added succeffully', { status: 200 })
  } catch (err) {
    return NextResponse.json('Error Cart update failed!', { status: 500 })
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

import { NextResponse } from 'next/server'

import connectToDatabase from '@/lib/db'

export async function GET() {
  const connect = await connectToDatabase()
  try {
    return NextResponse.json(
      { message: connect.message },
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

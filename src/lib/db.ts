/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import mongoose, { Connection } from 'mongoose'

type Mongoose = {
  db: Connection | null
  message: string
}
export default async function connectToDatabase(): Promise<Mongoose> {
  const connect: Mongoose = {
    db: null,
    message: '',
  }
  const { NEXT_PUBLIC_MONGODB_URI, NEXT_PUBLIC_MONGODB_DB } = process.env
  if (!NEXT_PUBLIC_MONGODB_URI) {
    connect.message = 'Please define the MONGODB_URI environment variable in your .env.local file'
    return connect
  }
  if (!NEXT_PUBLIC_MONGODB_DB) {
    connect.message = 'Please define the MONGODB_DB environment variable in your .env.local file'
    return connect
  }
  try {
    if (connect.db) {
      connect.message = 'Already connected to database'
      return connect
    }
    if (!connect.db) {
      const connection = await mongoose.connect(NEXT_PUBLIC_MONGODB_URI as string, {
        dbName: NEXT_PUBLIC_MONGODB_DB,
      })
      connect.db = connection.connection
      connect.message = 'Connected to database'
      return connect
    }
  } catch (error) {
    connect.db = null
    connect.message = 'Error connecting to database'
    console.error(error)
    return connect
  }
  return connect
}

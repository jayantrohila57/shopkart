// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose, { Schema } from 'mongoose'

const cartSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  products: [
    {
      _id: {
        type: String,
        required: true,
      },
      product: {
        _id: {
          type: String,
          require: [true],
        },
        name: {
          type: String,
          require: [true],
        },
        size: {
          type: String,
          require: [true],
        },
        color: {
          type: String,
          require: [true],
        },
        price: {
          type: Number,
          require: [true],
        },
        image: {
          type: String,
          require: [true],
        },
        description: {
          type: String,
          require: [true],
        },
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  totalAmount: {
    type: Number,
    default: 0, // You can set a default value if needed
  },
  totalItems: {
    type: Number,
    default: 0, // You can set a default value if needed
  },
})

const Cart = mongoose.models.Cart || mongoose.model('Cart', cartSchema)

export default Cart

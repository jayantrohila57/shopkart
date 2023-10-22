// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose, { Schema } from 'mongoose'

const productSchema = new Schema({
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
})
const Product = mongoose.models.Product || mongoose.model('Product', productSchema)
export default Product

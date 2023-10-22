export interface IProduct {
  _id: string
  name: string
  size: string
  color: string
  price: number
  image: string
  description: string
}

export interface ICartProduct {
  product: IProduct
  quantity: number
}

export interface ICart {
  _id: string
  products: ICartProduct[]
  totalAmount: number
  totalItems: number
}

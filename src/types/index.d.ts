export interface CartItem {
  image: string
  name: string
  defaultQuantity: number
  itemPrice: number
}

export interface Cart {
  items: CartItem[]
}

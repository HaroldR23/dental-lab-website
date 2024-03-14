export interface PriceType {
    price: string
    description: string
}

export interface ProductModel {
    id?: string
    name: string
    price: PriceType[]
    imageUrl?: string
}

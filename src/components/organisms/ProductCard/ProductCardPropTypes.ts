import { PriceType } from "../../../models/ProductModel"

export interface ProductCardPropTypes {
    productName: string
    imgUrl?: string
    price?: PriceType[]
}

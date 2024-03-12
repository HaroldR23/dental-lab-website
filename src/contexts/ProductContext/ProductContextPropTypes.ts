import React from "react";
import { ProductModel } from "../../models/ProductModel";

export interface ProductProviderType {
    children: React.ReactNode
}

export interface ProductContextType {
    products: ProductModel[]
    setProducts: (products: ProductModel[]) => void
    createProduct: (product: ProductModel) => void
}

import { createContext } from "react";
import { ProductContextType } from "./ProductContextPropTypes";

export const ProductContext = createContext<ProductContextType>({
    products: [],
    createProduct: () => {},
    setProducts: () => {},
});

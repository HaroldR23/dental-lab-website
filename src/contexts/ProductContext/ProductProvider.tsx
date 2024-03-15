import { ProductContext } from "./ProductContext";
import { useEffect, useState } from "react";
import { ProductModel } from "../../models/ProductModel";
import { ProductProviderType } from "./ProductContextPropTypes";
import { createProductService, getAllProductsService } from "../../services/productServices";

const ProductProvider = ({ children }: ProductProviderType) => {
    const [products, setProducts] = useState<ProductModel[]>([]);

    const createProduct = (product: ProductModel) => {
        setProducts([...products, product]);
        createProductService(product);
    };

    useEffect(() => {
        getAllProductsService().then((result) => {
            setProducts(result);
        });
    }, []);

    return (
        <ProductContext.Provider value={{ products, createProduct, setProducts }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;

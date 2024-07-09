import { ProductContext } from "./ProductContext";
import { useEffect, useState } from "react";
import { ProductModel } from "../../models/ProductModel";
import { ProductProviderType } from "./ProductContextPropTypes";
import { createProductService, getAllProductsService } from "../../services/productServices";
import { FOOTER_LOGO_URL } from "../../constants/templateConstants";

const ProductProvider = ({ children }: ProductProviderType) => {
    const [products, setProducts] = useState<ProductModel[] |  null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | unknown>(null);
  
    const resetState = () => {
      setError(null);
      setLoading(true);
    }
  
    const createProduct = async (product: ProductModel) => {
        await createProductService({...product, imageUrl: FOOTER_LOGO_URL});
        setProducts([...products || [], {...product, imageUrl: FOOTER_LOGO_URL}]);
    };

    useEffect(() => {
        const getAllProducts = async () => {
            resetState();
    
            try {
                const products = await getAllProductsService();
                setProducts(products || []);
              } catch (error) {
                setError(error);
              } finally {
                setLoading(false);
              }
    
        };
        getAllProducts()
    }, []);

    return (
        <ProductContext.Provider value={{ products, createProduct, setProducts, error, loading }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;

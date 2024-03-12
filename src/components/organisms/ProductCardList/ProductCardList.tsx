import ProductCard from "../ProductCard/ProductCard";
import { useProductContext } from "../../../hooks/useProductContext";

const ProductCardList = () => {
    const {
        products
    } = useProductContext();

    return (
        <div className="productCardList">
            {products.map((product) => (
                <ProductCard
                    key={product.id} 
                    imgUrl={product.imageUrl} 
                    price={product.price} 
                    productName={product.name} 
                />
            ))}
        </div>
    );
};

export default ProductCardList;
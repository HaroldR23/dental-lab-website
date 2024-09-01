import { useProductContext } from "../../../hooks/useProductContext";
import ProductCard from "../ProductCard/ProductCard";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const ProductCardList = () => {
  const {
    products,
    loading
  } = useProductContext();
    
  if (loading) {
    return <Spin indicator={<LoadingOutlined style={{ fontSize: 24, color: "black" }} spin />} />
  }
  return (
    <div className="productCardList">
      {products?.map((product) => (
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

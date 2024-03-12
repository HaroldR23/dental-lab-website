import InformationContent from "../../molecules/InformationContent/InformationContent";
import { ProductCardPropTypes } from "./ProductCardPropTypes";

const ProductCard = ({ productName, imgUrl, price }: ProductCardPropTypes) => {
    const childrenItems = [
        <img key={0} src={imgUrl} alt={productName} />,
        <p key={1}>{price}</p>
    ]
    return (
        <div className="productCard">
            <InformationContent 
                title={productName}
                children={childrenItems}   
            />
        </div>
    );
};

export default ProductCard;

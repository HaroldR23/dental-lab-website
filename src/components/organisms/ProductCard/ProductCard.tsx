import { PriceType } from "../../../models/ProductModel";
import InformationContent from "../../molecules/InformationContent/InformationContent";
import { ProductCardPropTypes } from "./ProductCardPropTypes";

const ProductCard = ({ productName, imgUrl, price }: ProductCardPropTypes) => {
  const parsePriceDescription = (priceDescription: string) => {
    const descriptionParsed = 
            priceDescription.replace(/_/g, " ").
              replace(priceDescription[0], priceDescription[0].toUpperCase());
    return descriptionParsed;
  };
  const childrenItems = [
    <div key={1} className="priceContainer">{
      price?.map((priceOption: PriceType, index) => (
        <div key={index}>
                    •{parsePriceDescription(priceOption.description)}: ${priceOption.price}
        </div>
      ))}
    </div>,
    <img key={0} src={imgUrl} alt={productName} />,
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

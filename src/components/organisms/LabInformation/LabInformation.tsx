import Paragraph from "../../atoms/Paragraph/Paragraph";
import Carousel from "../../molecules/Carousel/Carousel";
import InformationContent from "../../molecules/InformationContent/InformationContent";
import { LabInformationItemType, LabInformationPropTypes } from "./LabInformationPropTypes";

const LabInformation = ({ items }: LabInformationPropTypes) => {
    const carouselItems = items.map((item: LabInformationItemType, index: number) => (
        <InformationContent 
            key={index} 
            title={item.title} 
            children={[<Paragraph textContent={item.description}/>]}
        />
    ));

    return (
        <Carousel autoplay children={carouselItems}/>
    );
}

export default LabInformation;

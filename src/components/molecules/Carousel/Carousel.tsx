import { Carousel as AntCarousel } from "antd";
import { CarouselPropTypes } from "./CarouselPropTypes";

const Carousel = ({ imgUrls, autoplay }: CarouselPropTypes) => {
    return(
        <AntCarousel autoplay={autoplay}>
            {imgUrls.map((imgUrl: string, index: number) => (
                <img key={index} src={imgUrl} alt={imgUrl} />
            ))}
        </AntCarousel>
    )
}

export default Carousel;

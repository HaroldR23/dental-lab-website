import { Carousel as AntdCarousel } from "antd";
import { CarouselPropTypes } from "./CarouselPropTypes";

const Carousel = ({ imgUrls, autoplay }: CarouselPropTypes) => {
    return(
        <AntdCarousel autoplay={autoplay}>
            {imgUrls.map((imgUrl: string, index: number) => (
                <img key={index} src={imgUrl} alt={imgUrl} />
            ))}
        </AntdCarousel>
    )
}

export default Carousel;

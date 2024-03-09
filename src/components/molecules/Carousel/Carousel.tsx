import { Carousel as AntdCarousel } from "antd";
import { CarouselPropTypes } from "./CarouselPropTypes";
import { ReactElement } from "react";

const Carousel = ({ children, autoplay }: CarouselPropTypes) => {
    return(
        <AntdCarousel autoplay={autoplay}>
            {children.map((element: ReactElement, index: number) => (
                <div key={index}>
                    {element}
                </div>
            ))}
        </AntdCarousel>
    )
}

export default Carousel;

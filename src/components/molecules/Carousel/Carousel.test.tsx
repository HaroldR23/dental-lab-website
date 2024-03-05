import { render } from "@testing-library/react";
import Carousel from "./Carousel";

describe("Carousel", () => {
    const mockImgUrls = ["path/image_1.png", "path/image_2.png", "path/image_3.png"];
    it("should render the same amount of elements within imgUrls array prop", () => {
        const {container} = render(<Carousel imgUrls={mockImgUrls} autoplay/>);

        container.querySelectorAll("img").forEach(element => {
            const currentSrcAttribute: string = element.getAttribute("src") as string;
            const currentAltAttribute: string = element.getAttribute("alt") as string;

            const includesSrcAttribute = mockImgUrls.includes(currentSrcAttribute);
            const includesAltAttribute = mockImgUrls.includes(currentAltAttribute);

            expect(includesSrcAttribute).toBe(true)
            expect(includesAltAttribute).toBe(true)
        });
    });
})
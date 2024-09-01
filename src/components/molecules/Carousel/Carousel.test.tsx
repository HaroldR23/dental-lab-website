import { render } from "@testing-library/react";
import Carousel from "./Carousel";

describe("Carousel", () => {
  const mockImgUrls = ["https://example.com/image1.jpg", "https://example.com/image2.jpg"];
  const mockChildren = [
    <img key={0} src="https://example.com/image1.jpg" alt="image1" />, 
    <img key={1} src="https://example.com/image2.jpg" alt="image2" />
  ];

  it("should render the same amount of elements within children array prop", () => {
    const {container} = render(<Carousel autoplay children={mockChildren}/>);
    const imgElements = container.querySelectorAll("img");

    imgElements.forEach(element => {
      const currentSrcAttribute: string = element.getAttribute("src") as string;
      const includesSrcAttribute = mockImgUrls.includes(currentSrcAttribute);

      expect(includesSrcAttribute).toBe(true)
    });
  });
});

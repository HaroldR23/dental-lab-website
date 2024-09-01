import { render, screen } from "@testing-library/react";
import Galery from "./Galery";

describe("Galery", () => {
  it("should not render any image element", () => {
    render(<Galery imageUrls={[]} />);
    const currentImgs = screen.queryAllByRole("img");
    expect(currentImgs.length).toBe(0);
  });

  it("renders the correct number of images", () => {
    const imageUrls = [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg",
    ];
    const { getAllByRole } = render(<Galery imageUrls={imageUrls} />);
    const images = getAllByRole("img");
    expect(images.length).toBe(imageUrls.length);
  });
});

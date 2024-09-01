import { render } from "@testing-library/react";
import Paragraph from "./Paragraph";

describe("Paragraph", () => {
  it("renders the paragraph component with the provided text content", () => {
    const textContent = "This is a test paragraph.";
    const { container } = render(<Paragraph textContent={textContent} />);

    const paragraphElement = container.querySelector(".paragraph");
        
    expect(paragraphElement?.firstChild?.textContent).toBe(textContent);
  });
});

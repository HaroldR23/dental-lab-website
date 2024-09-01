import { render } from "@testing-library/react";
import ButtonLink from "./ButtonLink";
import { StarOutlined } from "@ant-design/icons";
import { ProductContext } from "../../../contexts/ProductContext/ProductContext";
import { mockValueContext } from "../../../constants/mockValueContext";

describe("ButtonLink", () => {
  it("should render a svg and a h4 elements correctly", () => {
    const text = "Button text test";
    const { container } = render(
      <ProductContext.Provider value={mockValueContext}>
        <ButtonLink icon={<StarOutlined />} text={text}/>
      </ProductContext.Provider>
    );
    const h4Element = container.querySelector("div");
    const svgElement = container.querySelector("svg");

    expect(svgElement).not.toBeNull();
    expect(h4Element?.textContent).toBe(text);  
  });
});

import { render } from "@testing-library/react";
import ButtonLink from "./ButtonLink";
import { StarOutlined } from "@ant-design/icons";

describe("ButtonLink", () => {
    it("should render a svg and a h4 elements correctly", () => {
        const text = "Button text test";
        const { container } = render(<ButtonLink icon={<StarOutlined />} text={text}/>);

        const h4Element = container.querySelector("h4");
        const svgElement = container.querySelector("svg");

        expect(svgElement).not.toBeNull();
        expect(h4Element?.textContent).toBe(text);  
    });
});

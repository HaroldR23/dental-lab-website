import { render } from "@testing-library/react";
import AnchorItem from "./AnchorItem";

describe("AnchorItem", () => {
  it("renders with the correct id and className attributes", () => {
    const id = "testId";
    const href = "href-id";
    const title = "title id";
    const { container } = render(<AnchorItem id={id} href={href} title={title}/>);

    const anchorItem = container.querySelector(".anchorItem");
    const currentId = anchorItem?.getAttribute("id");
    const className = anchorItem?.getAttribute("class");

    expect(currentId).toBe(id);
    expect(className).toBe("anchorItem");
  });
});

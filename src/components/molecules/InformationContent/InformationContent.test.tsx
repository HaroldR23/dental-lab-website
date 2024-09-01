import { render, screen } from "@testing-library/react";
import InformationContent from "./InformationContent";
import { ReactElement } from "react";

describe("InformationContent", () => {
  it("should render the title and children correctly", () => {
    const title = "Test Title";
    const children = [<div key={0}>Test Children1</div>, <div key={1}>Test Children2</div>];

    render(<InformationContent title={title} children={children}/>);

    const titleElement = screen.getByRole("heading");
    const childrenElements = screen.queryAllByRole("listitem");

    expect(titleElement.textContent).toBe(title);
    expect(childrenElements.length).toBe(children.length);
    childrenElements.forEach((element, index) => {
      expect(element.textContent).toBe(children[index].props.children);
    });
  });

  it("should not render any list item", () => {
    const title = "Test Title";
    const children: ReactElement[] = [];

    render(<InformationContent title={title} children={children}/>);
    const childrenElements = screen.queryAllByRole("listitem");

    expect(childrenElements).toHaveLength(0);
  });
});

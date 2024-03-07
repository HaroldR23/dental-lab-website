import { render } from "@testing-library/react";
import AnchorItem from "./AnchorItem";

describe('AnchorItem', () => {
  it('renders with the correct id and className attributes', () => {
    const testId = 'testId';
    const { container } = render(<AnchorItem id={testId} />);

    const anchorItem = container.querySelector(".anchorItem");
    const id = anchorItem?.getAttribute("id");
    const className = anchorItem?.getAttribute("class");

    expect(id).toBe(testId);
    expect(className).toBe("anchorItem");
  });
});

import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import Button from "./Button";

describe("Button", () => {
  const mockOnClick = jest.fn();
  const mockTextContent = "Test text content";
  const user = userEvent.setup();
  it("should render a button with the text given as prop", () => {
    render(<Button textContent={mockTextContent} onClick={mockOnClick}/>);
    const button = screen.getByRole("button");
    expect(button.textContent).toBe(mockTextContent);
  });
    
  it("should call the onClick function when clicked", async () => {
    render(<Button textContent={mockTextContent} onClick={mockOnClick} />);
    const button = screen.getByRole("button");
    await user.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });    
});

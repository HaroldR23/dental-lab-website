import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import CreateProductForm from "./CreateProductForm";

describe("CreateProductForm", () => {
  const user = userEvent.setup();
  const mockOnchange = jest.fn();
  it("should render two inputs one of text type and the other one of number type", () => {
    const { container } = render(<CreateProductForm onChange={mockOnchange}/>);
    const inputs = container.querySelectorAll("input");
    
    expect(inputs).toHaveLength(3);
    expect(inputs[0].type).toBe("text");
    expect(inputs[1].type).toBe("search");
    expect(inputs[2].type).toBe("text");
  });
  it("should call the onChange function when the input value changes", () => {
    const { container } = render(<CreateProductForm onChange={mockOnchange}/>);
    const inputs = container.querySelectorAll("input");
    inputs.forEach(async (input) => {
      await user.type(input, "test");
      expect(mockOnchange).toHaveBeenCalled();
    });
  });
});


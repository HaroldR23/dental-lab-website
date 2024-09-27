import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { useMediaQuery } from "react-responsive";
import { userEvent } from "@testing-library/user-event";
import { LabInformationPropTypes } from "./LabInformationPropTypes";
import LabInformation from "./LabInformation";

jest.mock("react-responsive", () => ({
  useMediaQuery: jest.fn(),
}));

const mockUseMediaQuery = useMediaQuery as jest.Mock;

describe("LabInformation Component", () => {
  const defaultProps: LabInformationPropTypes = {
    items: [
      { title: "Item 1", description: "Description 1" },
      { title: "Item 2", description: "Description 2" },
    ],
  };
  const user = userEvent.setup();

  beforeEach(() => {
    render(<LabInformation {...defaultProps}/>);
  });

  it("should render collapse items with large size on large screens", () => {
    mockUseMediaQuery.mockReturnValue(false);
    const collapse = screen.getByRole("tablist");
    expect(collapse).toBeInTheDocument();
    expect(collapse).toHaveClass("ant-collapse-large");
  });

  it("should render collapse items with middle size on small screens", () => {
    mockUseMediaQuery.mockReturnValue(true);
    const collapse = screen.getByRole("tablist");
    expect(collapse).toBeInTheDocument();
    expect(collapse).not.toHaveClass("ant-collapse-large", { exact: true });
  });

  it("should render the correct number of collapse items", () => {
    mockUseMediaQuery.mockReturnValue(false);
    const collapseItems = screen.getAllByRole("tab");
    expect(collapseItems).toHaveLength(defaultProps.items.length);
  });

  it("should render the correct content for each collapse item", () => {
    mockUseMediaQuery.mockReturnValue(false);
    defaultProps.items.forEach(async item => {
      const collapseItem = screen.getByRole("tab", { name: `caret-right ${item.title}` });
      expect(collapseItem).toBeInTheDocument();
      await user.click(collapseItem);
      const description = screen.getByText(item.description);
      expect(description).toBeInTheDocument();
    });
  });
});
import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import { useMediaQuery } from 'react-responsive';
import { userEvent } from "@testing-library/user-event";


jest.mock('react-responsive', () => ({
  useMediaQuery: jest.fn(),
}));

const mockUseMediaQuery = useMediaQuery as jest.Mock;

describe("NavBar", () => {
  const user = userEvent.setup();
  const logoUrl = "https://example.com/logo.png";
  const anchorItems = [
    { title: "Home", href: "/", id: "home" },
    { title: "About", href: "/about", id: "about"},
    { title: "Contact", href: "/contact", id: "contact"},
  ];
  beforeEach(() => {
    render(<NavBar logoUrl={logoUrl} anchorItems={anchorItems} />);
  });

  it("should render the logo", () => {   
    mockUseMediaQuery.mockReturnValue(false);
  
    const logoElement = screen.queryByRole("img");
    const srcAttribute = logoElement?.getAttribute("src");
    const altAttribute = logoElement?.getAttribute("alt");

    expect(srcAttribute).toBe(logoUrl);
    expect(altAttribute).toBe(logoUrl);
  });

  it("should render the anchor items", () => {
    mockUseMediaQuery.mockReturnValue(false);

    const anchorElements = screen.queryByRole("list");
    expect(anchorElements?.childElementCount).toBe(anchorItems.length);
  });

  it("should render the menu icon", () => {
    mockUseMediaQuery.mockReturnValue(true);
    const menuIcon = screen.queryByRole("button");
    expect(menuIcon).toBeDefined();
  });

  it("should render the anchor items in vertical container", async () => {
    mockUseMediaQuery.mockReturnValue(true);

    const button = screen.getByRole("button");
    await user.click(button);
    const verticalContainer = screen.queryByRole("list");
  
    expect(verticalContainer?.childElementCount).toBe(anchorItems.length);
  });
});

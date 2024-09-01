import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

describe("NavBar", () => {
  const logoUrl = "https://example.com/logo.png";
  const anchorItems = [
    { title: "Home", href: "/", id: "home" },
    { title: "About", href: "/about", id: "about"},
    { title: "Contact", href: "/contact", id: "contact"},
  ];
  beforeEach(() => {
    render(<NavBar logoUrl={logoUrl} anchorItems={anchorItems} />);
  });
  it("renders the logo", () => {        
    const logoElement = screen.queryByRole("img");
    const srcAttribute = logoElement?.getAttribute("src");
    const altAttribute = logoElement?.getAttribute("alt");

    expect(srcAttribute).toBe(logoUrl);
    expect(altAttribute).toBe(logoUrl);
  });

  it("renders the anchor items", () => {
    const anchorElements = screen.queryByRole("list");
    expect(anchorElements?.childElementCount).toBe(anchorItems.length);
  });
});

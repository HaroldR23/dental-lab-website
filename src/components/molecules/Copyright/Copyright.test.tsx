import { render, screen } from "@testing-library/react";
import Copyright from "./Copyright";
import { ProductContext } from "../../../contexts/ProductContext/ProductContext";
import { mockValueContext } from "../../../constants/mockValueContext";

describe("Copyright", () => {
    const textContent = "Copyright © 2022";
    const logoUrl = "https://example.com/logo.png";
    it("renders the text content correctly", () => {
        const { container } = render(
            <ProductContext.Provider value={mockValueContext}>
                <Copyright textContent={textContent} logoUrl={logoUrl}/>
            </ProductContext.Provider>
        );
        const textElement = container.querySelector("p");
        expect(textElement?.textContent).toBe(textContent);
    });

    it("renders the logo correctly", () => {
        render(
            <ProductContext.Provider value={mockValueContext}>
                <Copyright textContent={textContent} logoUrl={logoUrl}/>
            </ProductContext.Provider>
        );
        const logoSrc = screen.queryByRole("img")?.getAttribute("src");
        expect(logoSrc).toBe(logoUrl);
    });
});

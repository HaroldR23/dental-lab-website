import { render, screen } from "@testing-library/react";
import Copyright from "./Copyright";

describe("Copyright", () => {
    const textContent = "Copyright © 2022";
    const logoUrl = "https://example.com/logo.png";
    it("renders the text content correctly", () => {
        const { container } = render(<Copyright textContent={textContent} logoUrl={logoUrl}/>);
        const textElement = container.querySelector("p");
        expect(textElement?.textContent).toBe(textContent);
    });

    it("renders the logo correctly", () => {
        render(<Copyright logoUrl={logoUrl} textContent={textContent}/>);
        const logoSrc = screen.queryByRole("img")?.getAttribute("src");
        expect(logoSrc).toBe(logoUrl);
    });
});

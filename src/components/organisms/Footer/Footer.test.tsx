import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
    it("should render correctly the logo image with the given url and same number of items", () => {
        const mockFooterItems = [
            {
                title: "Title 1",
                children: [
                    {
                        icon: <div>Icon 1</div>,
                        description: "Description 1"
                    }
                ]
            },
            {
                title: "Title 1",
                children: [
                    {
                        icon: <div>Icon 1</div>,
                        description: "Description 1"
                    }
                ]
            }
        ];
        const mockLogoUrl = "https://www.example.com";

        const { container } = render(
            <Footer items={mockFooterItems} logoUrl={mockLogoUrl} />
        );
        const img = container.querySelector("img");

        const srcAttribute = img?.getAttribute("src");
        expect(srcAttribute).toBe(mockLogoUrl);
    });
});

import { render } from "@testing-library/react";
import ProductCardList from "./ProductCardList";
import { ProductContext } from "../../../contexts/ProductContext/ProductContext";
import { mockValueContext } from "../../../constants/mockValueContext";


describe("ProductCardList", () => {
    it("renders without error", () => {
        const { container } = render(
            <ProductContext.Provider value={mockValueContext}>
                <ProductCardList />
            </ProductContext.Provider>
        );
        const currentProducts = container.querySelectorAll(".productCard");
        expect(currentProducts).toHaveLength(mockValueContext.products.length);
    });

});

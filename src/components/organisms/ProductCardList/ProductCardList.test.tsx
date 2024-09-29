import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ProductCardList from "./ProductCardList";
import { ProductContext } from "../../../contexts/ProductContext/ProductContext";
import { mockValueContext } from "../../../constants/mockValueContext";


describe("ProductCardList", () => {
  it("should render without error", () => {
    const { container } = render(
      <ProductContext.Provider value={mockValueContext}>
        <ProductCardList />
      </ProductContext.Provider>
    );

    const currentProducts = container.querySelectorAll(".productCard");

    expect(currentProducts).toHaveLength(mockValueContext.products.length);
  });

  it("should render without error when there are no products", () => {
    const { container } = render(
      <ProductContext.Provider value={{...mockValueContext, products: []}}>
        <ProductCardList />
      </ProductContext.Provider>
    );

    const currentProducts = container.querySelectorAll(".productCard");

    expect(currentProducts).toHaveLength(0);
  });

  it("should render without error when loading", () => {
    const { container } = render(
      <ProductContext.Provider value={{...mockValueContext, loading: true}}>
        <ProductCardList />
      </ProductContext.Provider>
    );
    const currentProducts = container.querySelectorAll(".productCard");
    const currentSpin = container.querySelector("[data-testid='spin']");

    expect(currentSpin).toBeInTheDocument();
    expect(currentProducts).toHaveLength(0);
  });
});

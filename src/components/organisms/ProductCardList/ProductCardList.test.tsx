import { render } from "@testing-library/react";
import ProductCardList from "./ProductCardList";
import { ProductContext } from "../../../contexts/ProductContext/ProductContext";
import { ProductModel } from "../../../models/ProductModel";


describe("ProductCardList", () => {
    it("renders without error", () => {
        const mockProducts: ProductModel[] = [{
            id: "1",
            name: "Product 1",
            price: "100",
            imageUrl: "https://via.placeholder.com/150",
        },
        {
            id: "2",
            name: "Product 2",
            price: "200",
            imageUrl: "https://via.placeholder.com/150",
        },
        {
            id: "3",
            name: "Product 3",
            price: "300",
            imageUrl: "https://via.placeholder.com/150",
        }
    ];
        const mockCreateProduct = jest.fn();
        const mockSetProducts = jest.fn();
        const { container } = render(
            <ProductContext.Provider value={{ 
                    products: mockProducts, 
                    createProduct: mockCreateProduct, 
                    setProducts: mockSetProducts 
                }}
            >
                <ProductCardList />
            </ProductContext.Provider>
        );
        const currentProducts = container.querySelectorAll(".productCard");
        expect(currentProducts).toHaveLength(mockProducts.length);
    });

});

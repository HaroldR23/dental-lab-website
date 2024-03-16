import { ProductModel } from "../models/ProductModel";

const mockProducts: ProductModel[] = [{
    id: "1",
    name: "Product 1",
    price: [{price: "100", description: "cada_diente"}],
    imageUrl: "https://via.placeholder.com/150",
},
{
    id: "2",
    name: "Product 2",
    price: [{price: "200", description: "cada_diente"}],
    imageUrl: "https://via.placeholder.com/150",
},
{
    id: "3",
    name: "Product 3",
    price: [{price: "300", description: "cada_diente"}],
    imageUrl: "https://via.placeholder.com/150",
}
];

export const mockValueContext = {
    products: mockProducts, 
    createProduct: jest.fn(), 
    setProducts: jest.fn(), 
    error: "",
    loading: false
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_URL } from "../constants/productConstants";
import { ProductModel } from "../models/ProductModel";

export const getAllProductsService = async () => {
  try {
    const response = await fetch(`${API_URL}products`, {method: "GET"});
    const data = await response.json();
    const dataResponse: ProductModel[] = data.map((product: any) => (
      {
        id: product.id, 
        name: product.name, 
        price: product.prices.map((price: any) => ({price: price.value, description: price.description})), 
        imageUrl: product.img_url
      }));
    dataResponse
    return dataResponse;
  } catch (error: any) {
    throw new Error(error);
  }
};


export const createProductService = async (product: ProductModel) => {
  console.log(product, "product-----<<<<")
  try {
    await fetch(`${API_URL}products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: product.name,
        prices: product.price.map((price) => ({value: price.price, description: price.description})),
        img_url: product.imageUrl,
      }),
    });
  } catch (error: any) {
    throw new Error(error);
  }
}

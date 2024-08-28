/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_URL } from "../constants/productConstants";
import { ProductModel } from "../models/ProductModel";
import { RequestBody, getFetchMethod, postFetchMethod } from "./utils/httpClient";

export const getAllProductsService = async () => {
  try {
    const data = await getFetchMethod(`${API_URL}products`);
    const dataResponse: ProductModel[] = data.map((product: any) => (
      {
        id: product.id, 
        name: product.name, 
        price: product.prices.map((price: any) => ({price: price.value, description: price.description})), 
        imageUrl: product.img_url
      }));

      return dataResponse;

  } catch (error: any) {
    throw new Error(error);
  }
};


export const createProductService = async (product: ProductModel) => {
  try {
    const body: RequestBody = {
      name: product.name,
      prices: product.price.map((price) => ({value: price.price, description: price.description})),
      img_url: product.imageUrl
    };

    await postFetchMethod(`${API_URL}products`, body);
  
  } catch (error: any) {
    throw new Error(error);
  }
}

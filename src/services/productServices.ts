/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_KEY, RAPIDAPI_URL } from "../constants/productConstants";
import { FOOTER_LOGO_URL } from "../constants/templateConstants";
import { ProductModel } from "../models/ProductModel";

export const createProductService = async (product: ProductModel) => {
    const options = {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "json-store.p.rapidapi.com"
      },
      body: {
        name: "products",
        document: {
            name: product.name,
            price: product.price,
            imageUrl: FOOTER_LOGO_URL
        }
      }
    };
    
    try {
        const response = await fetch(RAPIDAPI_URL, {
            ...options,
            body: JSON.stringify(options.body)
        });
        const result = await response.text();
        return result;
    } catch (error) {
        console.error(error);
    }

}

export const getAllProductsService = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "json-store.p.rapidapi.com"
      },
    };

    try {
      const response = await (await fetch(RAPIDAPI_URL, options)).json();
      console.log(response, "result in service per se");
      const products = response.map(async (product: any) => {
        const response = await getProductByIdService(product.id);
        return {
          id: response.id,
          name: response.name,
          price: response.price,
          imageUrl: response.imageUrl
        };
      });
      console.log(products, "products in service per se");
      return products;
    } catch (error) {
      console.error(error);
    }
};

export const getProductByIdService = async (id: string) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'json-store.p.rapidapi.com'
      },
    };

    try {
      const response = await fetch(`${RAPIDAPI_URL}/${id}`, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
};
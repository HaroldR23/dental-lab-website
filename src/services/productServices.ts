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

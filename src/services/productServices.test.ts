import { descriptionType } from "../models/ProductModel";
import { createProductService, getAllProductsService } from "./productServices";

jest.mock("../constants/commonConstants", () => ({
  API_URL: "http://localhost:3000/"
}));

describe("getAllProductsService", () => {
  it("should return a list of appointments", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([
          {
            id: "1",
            name: "Product 1",
            prices: [{ value: "10", description: "superior_e_inferior" }],
            img_url: "image1.png"
          },
          {
            id: "2",
            name: "Product 2",
            prices: [{ value: "20", description: "cada_protesis" }],
            img_url: "image2.png"
          }]),
      })) as jest.Mock;

    const response = await getAllProductsService();
    expect(response).toEqual([
      {
        id: "1",
        name: "Product 1",
        price: [{ price: "10", description: "superior_e_inferior" }],
        imageUrl: "image1.png"
      },
      {
        id: "2",
        name: "Product 2",
        price: [{ price: "20", description: "cada_protesis" }],
        imageUrl: "image2.png"
      },
    ]);
  });

  it("should throw an error", async () => {
    global.fetch = jest.fn(() => Promise.reject("Error")) as jest.Mock;
    try {
      await getAllProductsService();
    } catch (error) {
      expect(error).toEqual("Error");
    }
  });
});

describe("createProductService", () => {
  const product = {
    name: "Product 1",
    price: [{ price: "10", description: "cada_protesis" as descriptionType }],
    imageUrl: "image1.png"
  };
  it("should create a product and return undefined", async () => {
    global.fetch = jest.fn(() => Promise.resolve()) as jest.Mock;

    const response = await createProductService(product);
		
    expect(response).toBeUndefined();
  });

  it("should throw an error", async () => {
    global.fetch = jest.fn(() => Promise.reject("Error")) as jest.Mock;

    try {
      await createProductService(product);
    } catch (error) {
      expect(error).toEqual("Error");
    }
  });
});

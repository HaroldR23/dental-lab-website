import { getFetchMethod, postFetchMethod } from "./httpClient";

describe("getFetchMethod", () => {
  it("should return mocked data", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: "Mocked data" }),
      })
    ) as jest.Mock;
    const response = await getFetchMethod("https://api.example.com/data");
  
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith("https://api.example.com/data", {method: "GET"});
  
    expect(response).toEqual({ data: "Mocked data" });
  });
  it("should throw an error if fetch fails", async () => {
    global.fetch = jest.fn(() => Promise.reject("Failed to fetch")) as jest.Mock;
    const response = getFetchMethod("https://api.example.com/data")
    expect(response).rejects.toThrow(
      "Failed to fetch"
    );
  });
});

describe("postFetchMethod", () => {
  it("should post data", async () => {
    const mockBody = { data: "Mocked data" };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockBody),
      })
    ) as jest.Mock;
    const response = await postFetchMethod("https://api.example.com/data", mockBody);
        
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith("https://api.example.com/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mockBody),
    });
        
    expect(response).toEqual(undefined);
  });

  it("should throw an error if fetch fails", async () => {
    global.fetch = jest.fn(() => Promise.reject("Failed to fetch")) as jest.Mock;
    const response = postFetchMethod("https://api.example.com/data", { data: "Mocked data" });
    expect(response).rejects.toThrow(
      "Failed to fetch"
    );
  });
});

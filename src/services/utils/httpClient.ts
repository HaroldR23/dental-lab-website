export interface RequestBody extends Record<string, unknown> {}

export const getFetchMethod = async (url: string) => {
    try {
        const response = await fetch(url, {method: "GET"});
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error as string);
    }
};

export const postFetchMethod = async (url: string, body: RequestBody) => {
    try {
        await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          });
    } catch (error) {
        throw new Error(error as string);
    }
};

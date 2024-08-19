const BASE_URL = "https://fakestoreapi.com";

const api = {
    async get(url) {
        const response = await fetch(`${BASE_URL}${url}`);
        if (!response.ok) {
            throw new Error(`API GET request failed: ${response.statusText}`);
        }
        return response.json();
    },
    async post(url, data) {
        const response = await fetch(`${BASE_URL}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`API POST request failed: ${response.statusText}`);
        }
        return response.json();
    },
};

export default api;

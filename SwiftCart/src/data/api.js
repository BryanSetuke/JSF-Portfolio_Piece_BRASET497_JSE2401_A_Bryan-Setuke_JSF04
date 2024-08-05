const API_URL = "https://fakestoreapi.com/products";

export const fetchProducts = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

export const fetchProductById = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
};

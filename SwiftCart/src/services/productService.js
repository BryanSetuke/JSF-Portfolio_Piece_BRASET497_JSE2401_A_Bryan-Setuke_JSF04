import api from "./api";

const productService = {
    async getProducts() {
        return await api.get("/products");
    },
    async getProductById(id) {
        return await api.get(`/products/${id}`);
    },
    // async getFeaturedProducts() {
    //     const products = await this.getProducts();
    //     return products.slice(0, 4); 
    // },
};

export default productService;

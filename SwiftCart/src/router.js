import { createRouter, createWebHistory } from "vue-router";
import ProductList from "./components/ProductList.vue";
import ProductDetail from "./components/ProductDetail.vue";

const routes = [
    { path: "/", component: ProductList },
    { path: "/product/:id", name: "ProductDetail", component: ProductDetail },
    // Add more routes as needed
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

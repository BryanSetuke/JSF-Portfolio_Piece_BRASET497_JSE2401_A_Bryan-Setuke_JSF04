import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import CartPage from "./pages/CartPage.vue";
import LoginPage from "./pages/LoginPage.vue";
import WishlistPage from "./pages/WishlistPage.vue";
import ProductDetail from "./components/ProductDetail.vue";

const routes = [
    { path: "/", component: HomePage },
    { path: "/cart", component: CartPage },
    { path: "/login", component: LoginPage },
    { path: "/wishlist", component: WishlistPage },
    { path: "/product/:id", component: ProductDetail },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../store/modules/auth";
import Home from "../pages/Home.vue";
import Product from "../pages/Product.vue";
import Cart from "../pages/Cart.vue";
import Comparison from "../pages/Comparison.vue";
import Checkout from "../pages/Checkout.vue";
import Login from "../pages/Login.vue";
import WishList from "../pages/WishList.vue";
import NotFound from "../pages/NotFound.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/product/:id",
        name: "Product",
        component: Product,
        props: true,
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
        meta: { requiresAuth: true },
    },
    {
        path: "/wishlist",
        name: "WishList",
        component: WishList,
        meta: { requiresAuth: true },
    },
    {
        path: "/comparison",
        name: "Comparison",
        component: Comparison,
        meta: { requiresAuth: true },
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: Checkout,
        meta: { requiresAuth: true },
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Navigation guard to check authentication
router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        // Store the path the user was trying to access
        authStore.setRedirectPath(to.fullPath);
        next({ name: "Login" });
    } else {
        next();
    }
});

export default router;

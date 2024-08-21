import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Product from "../pages/Product.vue";
import Cart from "../pages/Cart.vue";
import Comparison from "../pages/Comparison.vue";
import Checkout from "../pages/Checkout.vue";
import Login from "../pages/Login.vue";
import WishList from "../pages/WishList.vue"; 

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
    },
    {
        path: "/wishlist", // Define route for Wish List
        component: WishList,
    },
    {
        path: "/comparison",
        name: "Comparison",
        component: Comparison,
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: Checkout,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    // Add a catch-all route for 404 errors
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("../pages/NotFound.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

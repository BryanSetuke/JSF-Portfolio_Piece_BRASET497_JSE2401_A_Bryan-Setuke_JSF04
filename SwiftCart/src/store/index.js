import { createStore } from "vuex";
import auth from "./modules/auth";
import cart from "./modules/cart";
import comparison from "./modules/comparison";
import products from "./modules/products";
import theme from "./modules/theme";

export default createStore({
    modules: {
        auth,
        cart,
        comparison,
        products,
        theme,
    },
});

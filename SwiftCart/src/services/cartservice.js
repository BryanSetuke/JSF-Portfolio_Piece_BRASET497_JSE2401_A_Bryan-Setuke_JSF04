const cartService = {
    getCart() {
        return JSON.parse(localStorage.getItem("cart")) || [];
    },
    saveCart(cart) {
        localStorage.setItem("cart", JSON.stringify(cart));
    },
    addToCart(product) {
        const cart = this.getCart();
        const item = cart.find((i) => i.product.id === product.id);
        if (item) {
            item.quantity += 1;
        } else {
            cart.push({ product, quantity: 1 });
        }
        this.saveCart(cart);
    },
    removeFromCart(productId) {
        let cart = this.getCart();
        cart = cart.filter((i) => i.product.id !== productId);
        this.saveCart(cart);
    },
    clearCart() {
        localStorage.removeItem("cart");
    },
};

export default cartService;

const wishListService = {
    getWishList() {
        return JSON.parse(localStorage.getItem("wishList")) || [];
    },
    saveWishList(wishList) {
        localStorage.setItem("wishList", JSON.stringify(wishList));
    },
    addToWishList(product) {
        const wishList = this.getWishList();
        const itemExists = wishList.some((i) => i.id === product.id);
        if (!itemExists) {
            wishList.push(product);
        }
        this.saveWishList(wishList);
    },
    removeFromWishList(productId) {
        let wishList = this.getWishList();
        wishList = wishList.filter((i) => i.id !== productId);
        this.saveWishList(wishList);
    },
    clearWishList() {
        localStorage.removeItem("wishList");
    },
};

export default wishListService;

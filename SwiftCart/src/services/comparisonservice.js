const MAX_COMPARISON_ITEMS = 4; // Limit the number of items in the comparison list

const comparisonService = {
    getComparisonList() {
        // Retrieve the comparison list from local storage and parse it
        const comparisonList =
            JSON.parse(localStorage.getItem("comparison")) || [];
        return comparisonList.map((product) => ({
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
            image: product.image,
            category: product.category,
            rating: product.rating,
        }));
    },
    saveComparisonList(comparisonList) {
        // Save the comparison list back to local storage
        localStorage.setItem("comparison", JSON.stringify(comparisonList));
    },
    addToComparison(product) {
        const comparisonList = this.getComparisonList();
        // Check if the product is already in the comparison list
        if (!comparisonList.some((p) => p.id === product.id)) {
            if (comparisonList.length < MAX_COMPARISON_ITEMS) {
                comparisonList.push(product);
                this.saveComparisonList(comparisonList); // Save updated list
            } else {
                alert(
                    `You can only compare up to ${MAX_COMPARISON_ITEMS} items.`
                );
            }
        }
    },
    removeFromComparison(productId) {
        let comparisonList = this.getComparisonList();
        // Filter out the product to be removed
        comparisonList = comparisonList.filter((p) => p.id !== productId);
        this.saveComparisonList(comparisonList); // Save updated list
    },
    clearComparisonList() {
        // Clear the entire comparison list
        localStorage.removeItem("comparison");
    },
};

export default comparisonService;

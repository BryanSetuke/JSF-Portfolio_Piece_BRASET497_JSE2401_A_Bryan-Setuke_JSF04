const comparisonService = {
    getComparisonList() {
        return JSON.parse(localStorage.getItem("comparisonList")) || [];
    },
    saveComparisonList(comparisonList) {
        localStorage.setItem("comparisonList", JSON.stringify(comparisonList));
    },
    addToComparison(product) {
        const comparisonList = this.getComparisonList();
        if (!comparisonList.some((p) => p.id === product.id)) {
            comparisonList.push(product);
        }
        this.saveComparisonList(comparisonList);
    },
    removeFromComparison(productId) {
        let comparisonList = this.getComparisonList();
        comparisonList = comparisonList.filter((p) => p.id !== productId);
        this.saveComparisonList(comparisonList);
    },
};

export default comparisonService;

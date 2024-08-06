<template>
    <div>
        <div v-if="loading">Loading...</div>
        <div v-else>
            <!-- Filters Section -->
            <div class="filters">
                <div class="filter">
                    <i class="fas fa-tags filter-icon"></i>
                    <select
                        v-model="selectedCategory"
                        @change="filterByCategory"
                        class="filter-select"
                    >
                        <option value="">Select Category</option>
                        <option
                            v-for="category in categories"
                            :key="category"
                            :value="category"
                        >
                            {{ category }}
                        </option>
                    </select>
                </div>
                <div class="filter">
                    <i class="fas fa-dollar-sign filter-icon"></i>
                    <select
                        v-model="sortOrder"
                        @change="sortByPrice"
                        class="filter-select"
                    >
                        <!-- <option value="">Default</option> -->
                        <option value="asc">Price Low to High</option>
                        <option value="desc">Price High to Low</option>
                    </select>
                </div>
            </div>
            <div class="grid">
                <ProductCard
                    v-for="product in filteredProducts"
                    :key="product.id"
                    :product="product"
                />
            </div>
            <div v-if="!loading && products.length === 0">
                No products found.
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import ProductCard from "./ProductCard.vue";

export default {
    components: { ProductCard },
    data() {
        return {
            products: [],
            loading: true,
            selectedCategory: "",
            sortOrder: "asc",
            searchQuery: "",
            categories: [],
        };
    },
    computed: {
        filteredProducts() {
            let filtered = this.products;
            if (this.selectedCategory) {
                filtered = filtered.filter(
                    (product) => product.category === this.selectedCategory
                );
            }
            if (this.searchQuery) {
                filtered = filtered.filter((product) =>
                    product.title
                        .toLowerCase()
                        .includes(this.searchQuery.toLowerCase())
                );
            }
            return filtered.sort((a, b) =>
                this.sortOrder === "asc" ? a.price - b.price : b.price - a.price
            );
        },
    },
    async created() {
        try {
            const response = await axios.get(
                "https://fakestoreapi.com/products"
            );
            this.products = response.data;
            this.categories = [
                ...new Set(this.products.map((product) => product.category)),
            ];
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            this.loading = false;
        }
    },
    methods: {
        filterByCategory() {
            // This method is called when the category is changed
        },
        resetFilters() {
            this.selectedCategory = "";
            this.sortOrder = "asc"; // or whatever default is
        },
    },
};
</script>

<style scoped>
.navbar-filters {
    display: flex;
    align-items: center;
}
.grid {
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(300px, 1fr)
    ); /* Responsive grid */
    gap: 16px; /* Space between cards */
    margin: 20px; /* Margin around the grid */
}

/* Filters Section */
.filters {
    display: flex;
    justify-content: space-around; /* Space out filters */
    margin: 20px 0; /* Margin for spacing */
}

.filter {
    display: flex;
    align-items: center; /* Center items vertically */
}

.filter-icon {
    margin-right: 8px; /* Space between icon and input */
    color: #4b5563; /* Icon color */
}

.filter-select,
.filter-input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 150px; /* Fixed width for consistency */
}

.filter-input {
    width: 100px; /* Adjust width for input */
}

@media (max-width: 768px) {
    .grid {
        grid-template-columns: repeat(
            auto-fill,
            minmax(200px, 1fr)
        ); /* Adjust for smaller screens */
    }
}
</style>

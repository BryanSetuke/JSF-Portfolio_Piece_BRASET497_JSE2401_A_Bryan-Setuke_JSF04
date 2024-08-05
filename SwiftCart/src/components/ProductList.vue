<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div class="grid" v-else>
      <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>
    <div v-if="!loading && products.length === 0">No products found.</div>
  </div>
</template>

<script>
import axios from 'axios';
import ProductCard from './ProductCard.vue';

export default {
  components: { ProductCard },
  data() {
    return {
      products: [],
      loading: true,
      selectedCategory: '',
      sortOrder: 'asc',
      searchQuery: '',
      categories: [],
    };
  },
  computed: {
    filteredProducts() {
      let filtered = this.products;
      if (this.selectedCategory) {
        filtered = filtered.filter(product => product.category === this.selectedCategory);
      }
      if (this.searchQuery) {
        filtered = filtered.filter(product => product.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
      }
      return filtered.sort((a, b) => this.sortOrder === 'asc' ? a.price - b.price : b.price - a.price);
    },
  },
  async created() {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      this.products = response.data;
      this.categories = [...new Set(this.products.map(product => product.category))];
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    filterByCategory(category) {
      this.selectedCategory = category;
    },
    sortByPrice(order) {
      this.sortOrder = order;
    },
    filterBySearch() {
      // This is handled in the computed property
    },
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Responsive grid */
  gap: 16px; /* Space between cards */
  margin: 20px; /* Margin around the grid */
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Adjust for smaller screens */
  }
}
</style>

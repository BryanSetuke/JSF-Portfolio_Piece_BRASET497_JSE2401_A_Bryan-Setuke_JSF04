<!-- src/components/product/ProductSearchBar.vue -->
<template>
  <div class="mb-4">
    <input 
      type="text" 
      v-model="searchQuery" 
      @input="searchProducts" 
      placeholder="Search products..." 
      class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>
</template>

<script>
export default {
  name: 'ProductSearchBar',
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    searchProducts() {
      this.$store.dispatch('products/searchProducts', this.searchQuery);
    }
  }
};
</script>

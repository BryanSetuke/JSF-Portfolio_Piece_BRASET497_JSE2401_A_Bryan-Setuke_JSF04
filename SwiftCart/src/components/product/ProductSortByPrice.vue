<!-- src/components/product/ProductSortByPrice.vue -->
<template>
  <div class="mb-4">
    <label for="sort" class="block text-sm font-medium text-gray-700">Sort by Price</label>
    <select 
      id="sort" 
      v-model="selectedSort" 
      @change="sortByPrice" 
      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    >
      <option value="asc">Low to High</option>
      <option value="desc">High to Low</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'ProductSortByPrice',
  data() {
    return {
      selectedSort: 'asc',
    };
  },
  methods: {
    sortByPrice() {
      this.$store.dispatch('products/sortByPrice', this.selectedSort);
    }
  }
};
</script>

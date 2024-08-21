<!-- src/components/product/ProductFilterByCategory.vue -->
<template>
  <div class="mb-4">
    <label for="category" class="block text-sm font-medium text-gray-700">Filter by Category</label>
    <select 
      id="category" 
      v-model="selectedCategory" 
      @change="filterByCategory" 
      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    >
      <option value="">All Categories</option>
      <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
    </select>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useProductsStore } from '../../store/modules/products'; // Ensure the correct path

export default defineComponent({
  name: 'ProductFilterByCategory',
  data() {
    return {
      selectedCategory: '',
    };
  },
  setup() {
    const productsStore = useProductsStore();

    const categories = computed(() => productsStore.categories);

    const filterByCategory = () => {
      productsStore.filterByCategory(selectedCategory.value);
    };

    return {
      // selectedCategory,
      categories,
      filterByCategory,
    };
  }
});
</script>

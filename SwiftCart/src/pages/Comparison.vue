<template>
  <DefaultLayout>
    <div class="comparison">
      <h2 class="text-2xl font-bold mb-4">Comparison</h2>
      <button @click="clearComparison" class="mb-4 bg-red-500 text-white px-4 py-2 rounded">
        Clear Comparison List
      </button>
      <table class="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 p-2">Attribute</th>
            <th class="border border-gray-300 p-2" v-for="product in comparisonList" :key="product.id">
              {{ product.title }}
              <button @click="removeFromComparison(product.id)" class="ml-2 text-red-500">Remove</button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-2">Image</td>
            <td class="border border-gray-300 p-2" v-for="product in comparisonList" :key="product.id + '-image'">
              <img :src="product.image" :alt="product.title" class="w-20 h-20 object-contain" />
            </td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2">Description</td>
            <td class="border border-gray-300 p-2" v-for="product in comparisonList" :key="product.id + '-description'">
              {{ product.description }}
            </td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2">Price</td>
            <td class="border border-gray-300 p-2" v-for="product in comparisonList" :key="product.id + '-price'">
              <strong>${{ product.price }}</strong>
            </td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2">Rating</td>
            <td class="border border-gray-300 p-2" v-for="product in comparisonList" :key="product.id + '-rating'">
              {{ product.rating.rate }} ({{ product.rating.count }} reviews)
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="comparisonList.length === 0" class="mt-4 text-gray-500">No items in comparison list.</div>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '../layouts/DefaultLayout.vue';
import ComparisonService from '../services/comparisonservice';

export default {
  components: {
    DefaultLayout,
  },
  data() {
    return {
      comparisonList: [],
    };
  },
  created() {
    this.comparisonList = ComparisonService.getComparisonList();
  },
  methods: {
    removeFromComparison(productId) {
      ComparisonService.removeFromComparison(productId);
      this.comparisonList = ComparisonService.getComparisonList(); // Refresh the list after removal
    },
    clearComparison() {
      ComparisonService.clearComparisonList();
      this.comparisonList = []; // Clear the local state
    },
  },
};
</script>

<style scoped>
/* Additional styles can be added here if needed */
</style>

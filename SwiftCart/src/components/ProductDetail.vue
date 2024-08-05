<template>
  <div v-if="loading">Loading...</div>
  <div v-else>
    <img :src="product.image" alt="Product Image" class="w-full h-48 object-cover" />
    <h2 class="font-bold text-2xl mt-2">{{ product.title }}</h2>
    <p class="text-gray-600">{{ product.category }}</p>
    <p class="text-xl font-semibold">${{ product.price.toFixed(2) }}</p>
    <p class="mt-2">{{ product.description }}</p>
    <p class="mt-2">Rating: {{ product.rating.rate }} ({{ product.rating.count }} reviews)</p>
    <router-link to="/" class="text-blue-500 mt-2 inline-block">Back to Products</router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      product: {},
      loading: true,
    };
  },
  async created() {
    const productId = this.$route.params.id;
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      this.product = response.data;
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
/* Add any styles you need here */
</style>


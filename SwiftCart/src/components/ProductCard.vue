<template>
  <div class="border p-4 rounded">
    <img :src="product.image" :alt="product.title" class="w-full h-64 object-cover mb-4">
    <h2 class="text-lg font-bold">{{ product.title }}</h2>
    <p>{{ product.price | currency }}</p>
    <router-link :to="`/product/${product.id}`">View Details</router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  product: Object
});
</script>

<script>
export default {
  filters: {
    currency(value) {
      return `R ${value.toFixed(2)}`;
    }
  }
};
</script>

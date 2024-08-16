<template>
  <div>
    <Navbar />
    <div class="product-detail">
      <img :src="product.image" :alt="product.title" />
      <h1>{{ product.title }}</h1>
      <p>{{ product.description }}</p>
      <p>{{ product.price | currency }}</p>
      <button @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '../store/productStore';
import { onMounted, ref } from 'vue';
import Navbar from './Navbar.vue';
import { useRoute } from 'vue-router';

const store = useProductStore();
const route = useRoute();
const product = ref({});

onMounted(() => {
  const productId = route.params.id;
  product.value = store.products.find(p => p.id === +productId) || {};
});

function addToCart() {
  store.addToCart(product.value);
}

export default {
  filters: {
    currency(value) {
      return `R ${value.toFixed(2)}`;
    }
  }
};
</script>

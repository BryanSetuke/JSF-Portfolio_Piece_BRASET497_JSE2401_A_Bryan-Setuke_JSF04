<template>
  <div>
    <Navbar />
    <CategoryFilter />
    <SortByPrice />
    <div v-if="loading">Loading...</div>
    <div v-else>
      <ProductList :products="filteredProducts" />
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '../store/productStore';
import { onMounted } from 'vue';
import Navbar from '../components/Navbar.vue';
import CategoryFilter from '../components/CategoryFilter.vue';
import SortByPrice from '../components/SortByPrice.vue';
import ProductList from '../components/ProductList.vue';

const store = useProductStore();

onMounted(() => {
  store.fetchProducts();
});

const loading = store.loading;
const filteredProducts = store.filteredProducts;
</script>

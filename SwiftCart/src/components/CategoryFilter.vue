<template>
  <div>
    <label for="category">Filter by Category:</label>
    <select id="category" v-model="category" @change="applyFilter">
      <option value="">All Categories</option>
      <option value="electronics">Electronics</option>
      <option value="jewelery">Jewelery</option>
      <option value="men's clothing">Men's Clothing</option>
      <option value="women's clothing">Women's Clothing</option>
    </select>
  </div>
</template>

<script setup>
import { useProductStore } from '../store/productStore';

const store = useProductStore();
const category = store.category;

function applyFilter() {
  store.setCategory(category);
}
</script>

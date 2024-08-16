<template>
  <div>
    <label for="sort">Sort by Price:</label>
    <select id="sort" v-model="sortOrder" @change="applySort">
      <option value="">No Sorting</option>
      <option value="asc">Low to High</option>
      <option value="desc">High to Low</option>
    </select>
  </div>
</template>

<script setup>
import { useProductStore } from '../store/productStore';

const store = useProductStore();
const sortOrder = store.sortOrder;

function applySort() {
  store.setSortOrder(sortOrder);
}
</script>

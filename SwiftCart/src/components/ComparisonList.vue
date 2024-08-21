<template>
  <div v-if="isLoggedIn" class="comparison-container">
    <h2 class="text-2xl font-bold mb-4">Comparison List</h2>

    <div v-if="comparisonItems.length > 0">
      <button @click="clearComparisonList" class="btn-clear">Clear Comparison List</button>

      <table class="comparison-table">
        <thead>
          <tr>
            <th></th>
            <th v-for="(item, index) in comparisonItems" :key="index">
              <div class="item-header">
                <h3>{{ item.title }}</h3>
                <button @click="removeItem(index)" class="btn-remove">Remove</button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Image</td>
            <td v-for="item in comparisonItems" :key="item.id">
              <img :src="item.image" alt="Product Image" class="product-image" />
            </td>
          </tr>
          <tr>
            <td>Description</td>
            <td v-for="item in comparisonItems" :key="item.id">{{ item.description }}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td v-for="item in comparisonItems" :key="item.id">{{ formatPrice(item.price) }}</td>
          </tr>
          <tr>
            <td>Rating</td>
            <td v-for="item in comparisonItems" :key="item.id">
              <span class="rating">{{ item.rating.rate }} ★</span> 
              ({{ item.rating.count }} reviews)
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p class="text-gray-500">Your comparison list is empty.</p>
    </div>
  </div>
  <div v-else>
    <p>You need to be logged in to access the comparison list.</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useProductStore } from '../store/productStore';
import { useUserStore } from '../store/userStore';

// Access the product and user stores
const productStore = useProductStore();
const userStore = useUserStore();

// Check if the user is logged in
const isLoggedIn = computed(() => userStore.isLoggedIn);

// Comparison list state
const comparisonItems = computed(() => productStore.comparisonItems);

// Function to remove an item from the comparison list
function removeItem(index) {
  productStore.removeFromComparison(index);
}

// Function to clear the comparison list
function clearComparisonList() {
  productStore.clearComparison();
}

// Function to format the price
function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}
</script>

<style scoped>
.comparison-container {
  margin: 2rem auto;
  max-width: 1200px;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

.comparison-table th,
.comparison-table td {
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: center;
}

.product-image {
  max-width: 100px;
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-remove {
  background-color: #e3342f;
  color: white;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-clear {
  background-color: #ffed4a;
  color: #000;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1rem;
}

.rating {
  color: #f6ad55;
  font-weight: bold;
}
</style>

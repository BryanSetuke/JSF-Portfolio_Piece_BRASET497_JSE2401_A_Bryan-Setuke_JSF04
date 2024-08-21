<template>
  <div class="mb-4">
    <!-- Label -->
    <label for="sort" class="block mb-2">Sort by Price:</label>
    
    <!-- Dropdown with Icon -->
    <div class="relative">
      <i class="fas fa-sort-amount-down-alt absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
      <select 
        id="sort" 
        v-model="sortOrder" 
        @change="applySort"
        class="w-full pl-10 pr-4 p-2 border rounded appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">No Sorting</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
      <i class="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"></i>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '../store/productStore';
import { computed } from 'vue';

const store = useProductStore();
const sortOrder = computed(() => store.sortOrder);

function applySort() {
  store.setSortOrder(sortOrder.value);
}
</script>

<style scoped>
/* Styling for the container and icons */
.relative {
  position: relative;
}

.select {
  padding-left: 2.5rem; /* Adjust for the icon space */
}

label {
  color: #4B5563; /* Tailwind Gray */
}

.select i {
  color: #6B7280; /* Tailwind Cool Gray */
}

.focus\:ring-2 {
  outline: 2px solid #3B82F6; /* Tailwind Blue */
}

.text-gray-500 {
  color: #6B7280; /* Tailwind Cool Gray */
}

.border {
  border-color: #D1D5DB; /* Tailwind Gray */
}
</style>

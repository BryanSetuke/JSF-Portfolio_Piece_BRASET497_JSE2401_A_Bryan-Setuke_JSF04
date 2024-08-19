<template>
  <div class="comparison-item">
    <img :src="product.image" :alt="product.title" class="product-image" />
    <div class="product-info">
      <h3>{{ product.title }}</h3>
      <p>{{ product.category }}</p>
      <p>{{ formatCurrency(product.price) }}</p>
      <button @click="removeItem">Remove</button>
    </div>
  </div>
</template>

<script>
import { formatCurrency } from '@/utils/formatCurrency.js';

export default {
  name: 'ComparisonItem',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeItem() {
      this.$emit('remove', this.product.id);
    }
  }
}
</script>

<style scoped>
.comparison-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
}
.product-image {
  max-width: 100px;
  margin-right: 1rem;
}
.product-info {
  flex-grow: 1;
}
button {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 0.25rem;
}
button:hover {
  background: #c0392b;
}
</style>

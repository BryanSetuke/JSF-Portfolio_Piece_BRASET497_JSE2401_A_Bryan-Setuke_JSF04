<template>
  <div class="cart-summary">
    <h3>Cart Summary</h3>
    <p>Total: {{ formatCurrency(total) }}</p>
    <button @click="checkout">Proceed to Checkout</button>
  </div>
</template>

<script>
import { formatCurrency } from '@/utils/formatCurrency.js';

export default {
  name: 'CartSummary',
  props: {
    total: {
      type: Number,
      required: true
    }
  },
  methods: {
    checkout() {
      this.$emit('checkout');
    }
  }
}
</script>

<style scoped>
.cart-summary {
  padding: 1rem;
  border-top: 1px solid #e0e0e0;
  margin-top: 1.5rem;
  text-align: right;
}
button {
  background: #3498db;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 0.25rem;
}
button:hover {
  background: #2980b9;
}
</style>

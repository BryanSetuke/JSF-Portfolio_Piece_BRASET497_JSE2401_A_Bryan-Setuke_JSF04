<template>
  <div class="cart-item">
    <img :src="item.image" :alt="item.title" class="product-image" />
    <div class="product-info">
      <h3>{{ item.title }}</h3>
      <p>{{ formatCurrency(item.price) }}</p>
      <input type="number" v-model.number="item.quantity" @change="updateQuantity" min="1" />
      <button @click="removeItem">Remove</button>
    </div>
  </div>
</template>

<script>
import { formatCurrency } from '@/utils/formatCurrency.js';

export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    updateQuantity() {
      this.$emit('update', this.item.id, this.item.quantity);
    },
    removeItem() {
      this.$emit('remove', this.item.id);
    }
  }
}
</script>

<style scoped>
.cart-item {
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
input[type='number'] {
  width: 50px;
  margin-right: 1rem;
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

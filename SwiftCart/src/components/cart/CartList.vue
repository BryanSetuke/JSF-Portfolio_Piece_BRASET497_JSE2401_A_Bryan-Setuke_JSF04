<template>
  <div class="cart-list">
    <h2>Your Shopping Cart</h2>
    <CartItem
      v-for="item in cartItems"
      :key="item.id"
      :item="item"
      @update="updateQuantity"
      @remove="removeItem"
    />
    <CartSummary :total="cartTotal" />
  </div>
</template>

<script>
import CartItem from './CartItem.vue';
import CartSummary from './CartSummary.vue';

export default {
  name: 'CartList',
  components: {
    CartItem,
    CartSummary
  },
  props: {
    cartItems: {
      type: Array,
      required: true
    },
    cartTotal: {
      type: Number,
      required: true
    }
  },
  methods: {
    updateQuantity(productId, quantity) {
      this.$emit('update', productId, quantity);
    },
    removeItem(productId) {
      this.$emit('remove', productId);
    }
  }
}
</script>

<style scoped>
.cart-list {
  margin: 2rem 0;
}
h2 {
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}
</style>

<template>
  <div>
    <Navbar />
    <h1>Your Cart</h1>
    <div v-if="cart.length === 0">Your cart is empty</div>
    <div v-else>
      <ProductList :products="cart" />
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '../store/productStore';
import Navbar from '../components/Navbar.vue';
import ProductList from '../components/ProductList.vue';

const store = useProductStore();
const cart = store.cart;
</script>

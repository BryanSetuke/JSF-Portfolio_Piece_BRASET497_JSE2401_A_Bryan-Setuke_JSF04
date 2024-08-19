<template>
  <DefaultLayout>
    <div class="cart">
      <h2>Your Cart</h2>
      <ul>
        <li v-for="item in cart" :key="item.product.id">
          <p>{{ item.product.title }} - ${{ item.product.price }} x {{ item.quantity }}</p>
          <button @click="removeFromCart(item.product.id)">Remove</button>
        </li>
      </ul>
      <p><strong>Total:</strong> ${{ total }}</p>
      <router-link to="/checkout">Proceed to Checkout</router-link>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import CartService from '@/services/cartservice';

export default {
  components: {
    DefaultLayout,
  },
  data() {
    return {
      cart: [],
    };
  },
  computed: {
    total() {
      return this.cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    },
  },
  created() {
    this.cart = CartService.getCart();
  },
  methods: {
    removeFromCart(productId) {
      CartService.removeFromCart(productId);
      this.cart = CartService.getCart();
    },
  },
};
</script>

<style scoped>
.cart ul {
  list-style-type: none;
  padding: 0;
}
.cart li {
  margin-bottom: 16px;
}
</style>

<template>
  <DefaultLayout>
    <div class="bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-6">Your Cart</h2>
      <ul class="space-y-4">
        <li v-for="item in cart" :key="item.product.id" class="flex items-center justify-between border-b pb-4">
          <div>
            <p class="font-bold">{{ item.product.title }}</p>
            <p class="text-gray-500">$ {{ item.product.price }} x {{ item.quantity }}</p>
          </div>
          <button
            @click="removeFromCart(item.product.id)"
            class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Remove
          </button>
        </li>
      </ul>
      <div class="mt-8 flex justify-between items-center">
        <p class="text-lg font-bold">Total: <span>${{ total }}</span></p>
        <div class="flex space-x-4">
          <router-link
            to="/"
            class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Go back
          </router-link>
          <router-link
            to="/checkout"
            class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Proceed to Checkout
          </router-link>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '../layouts/DefaultLayout.vue';
import CartService from '../services/cartservice';

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
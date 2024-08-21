<template>
  <DefaultLayout>
    <div class="checkout max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">Checkout</h2>
      <form @submit.prevent="checkout">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
          <input v-model="name" type="text" id="name" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500" />
        </div>
        <div class="mb-4">
          <label for="address" class="block text-sm font-medium text-gray-700">Address:</label>
          <input v-model="address" type="text" id="address" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500" />
        </div>
        <div class="mb-4">
          <label for="card" class="block text-sm font-medium text-gray-700">Credit Card:</label>
          <input v-model="card" type="text" id="card" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500" />
        </div>
        <button type="submit" class="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">Place Order</button>
      </form>
      <button @click="goBack" class="mt-4 w-full py-2 px-4 bg-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-400">Go Back</button>
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
      name: '',
      address: '',
      card: '',
    };
  },
  methods: {
    checkout() {
      // Implement checkout process here (e.g., send order data to the API)
      CartService.clearCart();
      this.$router.push('/');
    },
    goBack() {
      this.$router.go(-1); // Navigate back to the previous page
    },
  },
};
</script>

<style scoped>
/* Additional styles can be added here if needed */
</style>

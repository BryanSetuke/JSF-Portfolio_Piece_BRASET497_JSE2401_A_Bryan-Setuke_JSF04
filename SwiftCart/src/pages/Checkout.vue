<template>
  <DefaultLayout>
    <div class="checkout">
      <h2>Checkout</h2>
      <form @submit.prevent="checkout">
        <div>
          <label for="name">Name:</label>
          <input v-model="name" type="text" id="name" required />
        </div>
        <div>
          <label for="address">Address:</label>
          <input v-model="address" type="text" id="address" required />
        </div>
        <div>
          <label for="card">Credit Card:</label>
          <input v-model="card" type="text" id="card" required />
        </div>
        <button type="submit">Place Order</button>
      </form>
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
  },
};
</script>

<style scoped>
.checkout form {
  max-width: 400px;
  margin: auto;
}
.checkout form div {
  margin-bottom: 16px;
}
</style>

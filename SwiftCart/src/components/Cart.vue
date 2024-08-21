<template>
  <div class="cart-container">
    <h1>Your Cart</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-if="cart">
        <h2>Cart ID: {{ cart.id }}</h2>
        <p>User ID: {{ cart.userId }}</p>
        <p>Date: {{ cart.date }}</p>
        <h3>Products:</h3>
        <ul>
          <li v-for="product in cart.products" :key="product.productId">
            Product ID: {{ product.productId }}, Quantity: {{ product.quantity }}
          </li>
        </ul>
      </div>
      <div v-else>
        <p>No cart found.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data() {
    return {
      cart: null,
      loading: true,
    };
  },
  methods: {
    fetchCart() {
      fetch('https://fakestoreapi.com/carts/1') // Replace with the desired cart ID
        .then((res) => res.json())
        .then((json) => {
          this.cart = json;
          this.loading = false;
        })
        .catch((err) => {
          console.error('Error fetching cart:', err);
          this.loading = false;
        });
    },
  },
  mounted() {
    this.fetchCart();
  },
};
</script>

<style scoped>
.cart-container {
  padding: 20px;
  max-width: 600px;
  margin: auto;
}

h1 {
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 5px 0;
}
</style>

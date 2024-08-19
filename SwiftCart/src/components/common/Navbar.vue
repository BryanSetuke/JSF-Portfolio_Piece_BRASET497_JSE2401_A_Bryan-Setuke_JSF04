<template>
  <nav class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo / Brand Name -->
      <router-link to="/" class="text-xl font-bold">FakeStore</router-link>

      <!-- Navigation Links -->
      <div class="flex space-x-4">
        <router-link to="/" class="hover:underline">Home</router-link>
        <router-link to="/cart" class="hover:underline">Cart</router-link>
        <router-link to="/comparison" class="hover:underline">Comparison</router-link>
        <router-link to="/checkout" class="hover:underline">Checkout</router-link>
        <router-link to="/login" class="hover:underline">Login</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
/* Scoped styles for Navbar */
</style>

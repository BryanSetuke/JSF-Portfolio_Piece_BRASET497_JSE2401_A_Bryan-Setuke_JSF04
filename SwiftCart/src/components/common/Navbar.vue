<template>
  <nav class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo / Brand Name -->
      <div class="flex items-center space-x-2">
        <img src="../../assets/logo-icon.jpg" alt="FakeStore Logo" class="w-8 h-8">
        <router-link to="/" class="text-xl font-bold">FakeStore</router-link>
      </div>

      <!-- Hamburger Menu for Small Screens -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-white focus:outline-none">
          <i :class="menuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
        </button>
      </div>

      <!-- Navigation Links -->
      <div 
        :class="menuOpen ? 'block' : 'hidden'" 
        class="w-full md:flex md:w-auto md:space-x-4 md:items-center"
      >
        <router-link to="/" class="block md:flex items-center space-x-1 hover:underline py-2 md:py-0">
          <i class="fas fa-home"></i>
          <span>Home</span>
        </router-link>
        <router-link to="/cart" class="block md:flex items-center space-x-1 hover:underline py-2 md:py-0">
          <i class="fas fa-shopping-cart"></i>
          <span>Cart</span>
        </router-link>
        <router-link to="/comparison" class="block md:flex items-center space-x-1 hover:underline py-2 md:py-0">
          <i class="fas fa-exchange-alt"></i>
          <span>Comparison</span>
        </router-link>
        <router-link to="/wishlist" class="block md:flex items-center space-x-1 hover:underline py-2 md:py-0">
          <i class="fas fa-heart"></i>
          <span>Wishlist</span>
        </router-link>
        <router-link to="/checkout" class="block md:flex items-center space-x-1 hover:underline py-2 md:py-0">
          <i class="fas fa-credit-card"></i>
          <span>Checkout</span>
        </router-link>
        <router-link to="/login" class="block md:flex items-center space-x-1 hover:underline py-2 md:py-0">
          <i class="fas fa-user"></i>
          <span>Login</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
}
</script>

<style scoped>
/* Scoped styles for Navbar */
</style>

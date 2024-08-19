<template>
  <div id="app">
    <!-- Navbar Component -->
    <Navbar />

    <!-- Main Content -->
    <main class="container mx-auto py-4">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white text-center py-4">
      <p>&copy; 2024 FakeStore. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/common/Navbar.vue'; // Import the Navbar component

export default {
  name: 'App',
  components: {
    Navbar // Register the Navbar component
  }
}
</script>

<style>
@import './assets/styles/main.css'; /* Import main styles */
</style>

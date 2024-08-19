<template>
  <div class="not-found-container text-center py-20">
    <h1 class="text-6xl font-bold text-gray-800">404</h1>
    <p class="text-2xl text-gray-600 mt-4">Page Not Found</p>
    <p class="text-gray-500 mt-2">The page you are looking for doesn't exist or has been moved.</p>
    <router-link to="/" class="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-lg hover:bg-blue-700">
      Go Back to Home
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found-container {
  min-height: calc(100vh - 160px); /* Adjust to make sure it doesn't cover the footer */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

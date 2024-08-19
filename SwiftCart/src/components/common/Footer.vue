<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; {{ currentYear }} Your Company Name. All rights reserved.</p>
      <slot></slot>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: #f8f9fa;
  padding: 1rem;
  text-align: center;
  border-top: 1px solid #e9ecef;
}
.container {
  max-width: 1140px;
  margin: 0 auto;
}
</style>

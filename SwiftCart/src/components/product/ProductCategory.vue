<template>
  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    {{ category }}
  </span>
</template>

<script>
export default {
  name: 'ProductCategory',
  props: {
    category: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>

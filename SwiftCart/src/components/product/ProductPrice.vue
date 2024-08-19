<template>
  <div class="text-xl font-semibold text-gray-900">
    ${{ price.toFixed(2) }}
  </div>
</template>

<script>
export default {
  name: 'ProductPrice',
  props: {
    price: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>

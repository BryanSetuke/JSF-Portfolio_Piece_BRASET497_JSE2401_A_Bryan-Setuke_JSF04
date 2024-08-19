<template>
  <div class="flex items-center">
    <span v-for="n in 5" :key="n" class="text-yellow-500">
      <i :class="n <= Math.round(rating.rate) ? 'fas fa-star' : 'far fa-star'"></i>
    </span>
    <span class="ml-2 text-gray-600">({{ rating.count }})</span>
  </div>
</template>

<script>
export default {
  name: 'ProductRating',
  props: {
    rating: {
      type: Object,
      required: true,
      default: () => ({ rate: 0, count: 0 })
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>

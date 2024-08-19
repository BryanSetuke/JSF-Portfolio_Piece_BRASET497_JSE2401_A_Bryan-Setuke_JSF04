<template>
  <img :src="image" :alt="alt" class="w-full" />
</template>

<script>
export default {
  name: 'ProductImage',
  props: {
    image: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>

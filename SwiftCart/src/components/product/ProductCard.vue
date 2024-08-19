<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <ProductImage :image="product.image" :alt="product.title" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ product.title }}</div>
      <ProductPrice :price="product.price" />
      <ProductRating :rating="product.rating" />
    </div>
    <div class="px-6 pt-4 pb-2">
      <ProductCategory :category="product.category" />
    </div>
  </div>
</template>

<script>
import ProductImage from './ProductImage.vue';
import ProductPrice from './ProductPrice.vue';
import ProductRating from './ProductRating.vue';
import ProductCategory from './ProductCategory.vue';

export default {
  name: 'ProductCard',
  components: {
    ProductImage,
    ProductPrice,
    ProductRating,
    ProductCategory
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>

<template>
  <div>
    <ProductImage :image="product.image" :alt="product.title" />
    <h2 class="text-2xl font-bold my-4">{{ product.title }}</h2>
    <ProductPrice :price="product.price" />
    <p class="my-4">{{ product.description }}</p>
    <ProductRating :rating="product.rating" />
    <ProductCategory :category="product.category" />
  </div>
</template>

<script>
import ProductImage from './ProductImage.vue';
import ProductPrice from './ProductPrice.vue';
import ProductRating from './ProductRating.vue';
import ProductCategory from './ProductCategory.vue';

export default {
  name: 'ProductDetail',
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

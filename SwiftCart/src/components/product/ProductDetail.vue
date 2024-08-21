<template>
  <div class="container mx-auto p-6">
    <div class="flex flex-col md:flex-row">
      <div class="md:w-1/2">
        <ProductImage :image="product.image" :alt="product.title" class="rounded-lg shadow-lg" />
      </div>
      <div class="md:w-1/2 md:pl-6">
        <h2 class="text-3xl font-bold my-4">{{ product.title }}</h2>
        <ProductPrice :price="product.price" class="text-xl font-semibold text-gray-800" />
        <p class="my-4 text-gray-600">{{ product.description }}</p>
        <ProductRating :rating="product.rating" />
        <ProductCategory :category="product.category" class="my-2" />
        <div class="flex space-x-4 mt-4">
          <button @click="goBack" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded transition duration-300">
            Go Back
          </button>
          <button @click="compareProduct" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            Compare
          </button>
          <button @click="addToCart" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
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
  },
  methods: {
    goBack() {
      this.$router.go(-1); // Navigate back to the previous page
    },
    compareProduct() {
      // Logic for comparing the product
      alert('Comparison feature is not implemented yet.');
    },
    addToCart() {
      // Logic for adding the product to the cart
      alert('Product added to cart!'); // Optional: To notify the user
    }
  }
}
</script>

<style scoped>
/* Add your styles here if needed */
</style>

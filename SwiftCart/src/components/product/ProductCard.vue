<template>
  <div class="bg-white border border-slate-200 shadow-lg shadow-slate-950/5 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:scale-102 hover:shadow-xl">
    <router-link :to="`/product/${product.id}`" class="block">
      <div class="relative">
        <ProductImage :image="product.image" :alt="product.title" class="w-full mt-2 h-48 object-contain" />
        <div class="mt-5 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
          <ProductCategory :category="product.category" />
        </div>
      </div>
      <div class="p-4 flex flex-col justify-between h-full">
        <div>
          <div class="font-bold text-lg mb-2">{{ product.title }}</div>
          <div class="flex items-center mb-2">
            <ProductPrice :price="product.price" class="mr-2" />
            <ProductRating :rating="product.rating" />
          </div>
        </div>
      </div>
    </router-link>
    <div class="flex justify-between gap-2 mt-4 p-4">
      <button
        @click="addToCart"
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded transition-colors duration-300"
      >
        Add to Cart
      </button>
      <button
        @click="addToWishList"
        class="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded transition-colors duration-300"
      >
        Add to Wish List
      </button>
      <button @click="compareProduct" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            Compare
          </button>
    </div>
  </div>
</template>

<script>
import ProductImage from './ProductImage.vue';
import ProductPrice from './ProductPrice.vue';
import ProductRating from './ProductRating.vue';
import ProductCategory from './ProductCategory.vue';
import cartService from '../../services/cartservice';
import { useWishListStore } from '../../store/wishList';
import { useComparisonStore } from '../../store/modules/comparison';

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
  },
  setup() {
    const comparisonStore = useComparisonStore();
    return {
      // wishListStore,
      comparisonStore,
    };
  },
  methods: {
    addToCart() {
      cartService.addToCart(this.product);
      alert('Product added to cart!'); // Optional: To notify the user
    },
    addToWishList() {
      this.wishListStore.addToWishList(this.product);
    },
    compareProduct() {
      this.comparisonStore.addToComparison(this.product); // Add the product to the comparison store
      alert('Product added to comparison!'); // Notify the user
    },
  }
}
</script>

<style scoped>
/* Add your styles here if needed */
</style>


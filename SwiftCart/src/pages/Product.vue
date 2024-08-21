<template>
  <DefaultLayout>
    <div class="container mx-auto p-6">
      <!-- Filters and Search (Uncomment if needed) -->
      <!-- <div class="flex flex-col md:flex-row justify-between items-center mb-6">
        <ProductFilterByCategory />
        <ProductSortByPrice />
        <ProductSearchBar />
      </div> -->

      <!-- Product Grid -->
      <ProductGrid />

      <!-- Individual Product Display -->
      <div v-if="product" class="product mt-8">
        <h2 class="text-3xl font-semibold mb-4">{{ product.title }}</h2>
        <img
          :src="product.image"
          :alt="product.title"
          class="h-64 max-h-96 object-contain rounded-lg shadow-lg mb-4"
        />
        <p class="mb-4 text-gray-700">{{ product.description }}</p>
        <p class="text-lg font-bold mb-2">
          <strong>Price:</strong> ${{ product.price }}
        </p>
        
        <!-- Product Rating -->
        <div class="flex items-center mb-4">
          <ProductRating :rating="product.rating" />
          <span class="ml-2 text-gray-600">({{ product.rating }})</span>
        </div>

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
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../layouts/DefaultLayout.vue";
import ProductService from "../services/productService";
import CartService from "../services/cartservice";
import ProductGrid from "../components/product/ProductGrid.vue";
import ProductRating from "../components/product/ProductRating.vue"; // Importing ProductRating component
import { useComparisonStore } from '../store/modules/comparison'; // Importing the comparison store

export default {
  name: "Product",
  components: {
    DefaultLayout,
    ProductGrid,
    ProductRating, // Registering ProductRating component
  },
  data() {
    return {
      product: null,
    };
  },
  async created() {
    const productId = this.$route.params.id;
    if (productId) {
      this.product = await ProductService.getProductById(productId);
    }
  },
  setup() {
    const comparisonStore = useComparisonStore(); // Accessing the comparison store
    return { comparisonStore };
  },
  methods: {
    goBack() {
      this.$router.go(-1); // Navigate back to the previous page
    },
    compareProduct() {
      this.comparisonStore.addToComparison(this.product); // Add the product to the comparison store
      alert('Product added to comparison!'); // Notify the user
    },
    addToCart() {
      CartService.addToCart(this.product);
      alert('Product added to cart!'); // Optional: To notify the user
    },
  },
};
</script>

<style scoped>
.product img {
  max-width: 100%;
  height: auto;
  margin-bottom: 16px;
}
</style>

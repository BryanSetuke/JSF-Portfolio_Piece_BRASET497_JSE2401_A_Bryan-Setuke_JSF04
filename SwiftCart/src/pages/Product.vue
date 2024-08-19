<template>
  <DefaultLayout>
    <div class="product">
      <h2>{{ product.title }}</h2>
      <img :src="product.image" :alt="product.title" />
      <p>{{ product.description }}</p>
      <p><strong>Price:</strong> ${{ product.price }}</p>
      <button @click="addToCart">Add to Cart</button>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import ProductService from '@/services/productservice';
import CartService from '@/services/cartservice';

export default {
  components: {
    DefaultLayout,
  },
  data() {
    return {
      product: null,
    };
  },
  async created() {
    const productId = this.$route.params.id;
    this.product = await ProductService.getProductById(productId);
  },
  methods: {
    addToCart() {
      CartService.addToCart(this.product);
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

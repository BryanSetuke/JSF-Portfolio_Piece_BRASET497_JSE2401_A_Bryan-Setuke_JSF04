<template>
  <div class="comparison-list">
    <h2>Product Comparison</h2>
    <ComparisonItem
      v-for="product in products"
      :key="product.id"
      :product="product"
      @remove="removeProduct"
    />
  </div>
</template>

<script>
import ComparisonItem from './ComparisonItem.vue';

export default {
  name: 'ComparisonList',
  components: {
    ComparisonItem
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  methods: {
    removeProduct(productId) {
      this.$emit('remove', productId);
    }
  }
}
</script>

<style scoped>
.comparison-list {
  margin: 2rem 0;
}
h2 {
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}
</style>

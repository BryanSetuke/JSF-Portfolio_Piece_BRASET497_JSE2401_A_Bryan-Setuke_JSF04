<template>
  <DefaultLayout>
    <div class="comparison">
      <h2>Comparison</h2>
      <div class="comparison-grid">
        <div v-for="product in comparisonList" :key="product.id" class="comparison-item">
          <h3>{{ product.title }}</h3>
          <img :src="product.image" :alt="product.title" />
          <p>{{ product.description }}</p>
          <p><strong>Price:</strong> ${{ product.price }}</p>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import ComparisonService from '@/services/comparisonservice';

export default {
  components: {
    DefaultLayout,
  },
  data() {
    return {
      comparisonList: [],
    };
  },
  created() {
    this.comparisonList = ComparisonService.getComparisonList();
  },
};
</script>

<style scoped>
.comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}
</style>

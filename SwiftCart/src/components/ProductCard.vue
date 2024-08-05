<template>
  <div class="border rounded-lg p-4 transition-transform transform hover:scale-105 card">
    <img :src="product.image" alt="Product Image" class="product-image" />
    <h2 class="font-bold text-lg mt-2">{{ product.title }}</h2>
    <p class="text-gray-600">{{ product.category }}</p>
    <p class="text-xl font-semibold">${{ product.price.toFixed(2) }}</p>
    <div class="rating">
      <span class="rating-value">{{ product.rating.rate.toFixed(1) }}</span>
      <span class="rating-stars">
        <i v-for="star in Math.floor(product.rating.rate)" :key="star" class="fas fa-star text-yellow-500"></i>
        <i v-for="star in 5 - Math.floor(product.rating.rate)" :key="star + 5" class="fas fa-star text-gray-300"></i>
      </span>
    </div>
    <div class="flex justify-between items-center mt-2">
      <button @click="addToCart" class="add-to-cart-button">
        <i class="fas fa-cart-plus mr-1"></i> Add to Cart
      </button>
      <button @click="toggleWishlist" :class="{'text-red-500': isWished}" class="wishlist-button">
        <i class="fas fa-heart"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  data() {
    return {
      isWished: false,
    };
  },
  methods: {
    addToCart() {
      // Implement add to cart functionality
      alert('Added to cart!');
    },
    toggleWishlist() {
      this.isWished = !this.isWished;
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; /* Ensure cards are of equal height */
}

.product-image {
  width: 100%; /* Make the image responsive */
  height: auto; /* Maintain aspect ratio */
  max-height: 200px; /* Set a maximum height for the image */
  object-fit: contain; /* Ensure the image covers the area without distortion */
  border-radius: 8px; /* Optional: round the corners of the image */
}

.rating {
  display: flex;
  align-items: center;
  margin-top: 5px; /* Space above the rating */
}

.rating-value {
  font-weight: bold;
  margin-right: 5px; /* Space between value and stars */
}

.add-to-cart-button {
  background-color: #4B5563; /* Button background */
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.wishlist-button {
  background: none;
  border: none;
  color: gray;
  cursor: pointer;
}
</style>

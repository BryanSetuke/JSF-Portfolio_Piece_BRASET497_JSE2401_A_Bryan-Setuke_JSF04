<template>
  <div id="wishlist-container" class="flex flex-wrap -mx-4">
    <div
      class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
      v-for="(product, index) in uniqueWishList"
      :key="product.id"
    >
      <div class="wishlist-item card">
        <router-link :to="`/product/${product.id}`" class="product-link">
          <img :src="product.image" :alt="product.title" class="card-image h-64 w-full object-contain" />
          <div class="card-body">
            <h3 class="card-title text-lg font-bold mb-2">{{ product.title }}</h3>
            <ProductPrice :price="product.price" />
          </div>
        </router-link>
        <button @click="removeFromWishList(product.id)" class="remove-button">
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductPrice from "../product/ProductPrice.vue";
import { useWishListStore } from "../../store/wishList";

export default {
  name: "WishListItem",
  components: {
    ProductPrice,
  },
  setup() {
    const wishListStore = useWishListStore();
    return {
      wishListStore,
    };
  },
  computed: {
    uniqueWishList() {
      // Create a Set to filter out duplicate products based on their IDs
      const uniqueProducts = new Set();
      return this.wishListStore.wishList.filter(product => {
        if (!uniqueProducts.has(product.id)) {
          uniqueProducts.add(product.id);
          return true;
        }
        return false;
      });
    }
  },
  methods: {
    removeFromWishList(productId) {
      this.wishListStore.removeFromWishList(productId);
      this.$emit("item-removed", productId);
    },
  },
};
</script>

<style scoped>
#wishlist-container {
  display: flex;
  flex-wrap: wrap;
  margin: -1rem;
}

.wishlist-item {
  background-color: #ffffff;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: 1rem;
}

.wishlist-item:hover {
  transform: translateY(-5px);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: contain;
}

.card-body {
  padding: 1rem;
  flex-grow: 1;
}

.card-title {
  color: #333333;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.remove-button {
  background-color: #e53e3e;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0 0 0.5rem 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;
}

.remove-button:hover {
  background-color: #c53030;
}
</style>

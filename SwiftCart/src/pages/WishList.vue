<template>
  <div class="space-y-4">
    <div v-for="product in wishList" :key="product.id" class="flex justify-between items-center border-b pb-4">
      <WishListItem
        :product="product"
        @item-removed="removeItem(product.id)"
      />
      <!-- <button @click="removeItem(product.id)" class="ml-4 text-red-600 hover:text-red-800">Remove</button> -->
    </div>
    <div class="flex justify-between mt-4">
      <button @click="goBack" class="py-2 px-4 bg-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-400">Go Back</button>
      <button @click="addToCart" class="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">Add to Cart</button>
    </div>
  </div>
</template>

<script>
import WishListItem from '../../src/components/wishlist/WishListItem.vue';
import { useWishListStore } from '../../src/store/wishList';

export default {
  name: 'WishList',
  components: {
    WishListItem
  },
  setup() {
    const wishListStore = useWishListStore();
    return {
      wishList: wishListStore.getWishList
    };
  },
  methods: {
    removeItem(productId) {
      this.wishList = this.wishList.filter(product => product.id !== productId);
      // Optionally, you can also call a store method to update the wishlist in the store
      // wishListStore.removeProduct(productId);
    },
    goBack() {
      this.$router.go(-1); // Navigate back to the previous page
    },
    addToCart() {
      // Implement logic to add all items in the wishlist to the cart
      this.wishList.forEach(product => {
        // Assuming you have a method to add a product to the cart
        // CartService.addToCart(product);
      });
      alert('All items added to cart!'); // Placeholder for feedback
    }
  }
}
</script>

<style scoped>
/* Scoped styles if needed */
</style>

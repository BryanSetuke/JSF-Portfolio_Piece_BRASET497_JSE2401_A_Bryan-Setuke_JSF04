<template>
    <div id="app" class="bg-gray-200 min-h-screen p-4">
        <!-- Product details -->
        <div
            v-if="product"
            class="product-container border rounded-lg p-4 bg-white"
        >
        
            <div class="image-container">
                <img
                    :src="product.image"
                    :alt="product.title"
                    class="product-image"
                />
            </div>
            <div class="details-container">
                <h4 class="font-bold text-2xl mb-2">{{ product.title }}</h4>
                <p class="text-gray-600 mb-2">{{ product.category }}</p>
                <p class="text-xl font-semibold mb-2">${{ product.price.toFixed(2) }}</p>
                <div class="rating mb-2">
                    <span class="rating-value">{{ product.rating.rate.toFixed(1) }}</span>
                    <span class="rating-stars">
                        <i
                            class="fas fa-star"
                            :class="getStarColor(product.rating.rate)"
                        ></i>
                    </span>
                    <span
                        @click="toggleWishlist"
                        :class="{ 'text-red-500': isWished, 'bg-white': !isWished }"
                        class="wishlist-icon ml-2"
                    >
                        <i class="fas fa-heart"></i>
                    </span>
                </div>
                <p class="mb-4">{{ product.description }}</p>
                <div class="button-container">
                    <button @click="addToCart" class="add-to-cart-button">
                        <i class="fas fa-cart-plus mr-1"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
        <div v-else class="text-center py-8">Loading product details...</div>
    </div>

    <div>
      <button @click="goBuck">
        goBack
      </button>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            product: null,
            isWished: false,
        };
    },
    async created() {
        try {
            const productId = this.$route.params.id; // Assuming you're using vue-router
            const response = await axios.get(
                `https://fakestoreapi.com/products/${productId}`
            );
            this.product = response.data;
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    },
    methods: {
        getStarColor(rating) {
            if (rating >= 4) return "text-yellow-500";
            if (rating >= 2.5) return "text-orange-500";
            return "text-gray-300";
        },
        toggleWishlist() {
            this.isWished = !this.isWished;
        },
        addToCart() {
            alert("Added to cart!");
        },
        goBuck (){
          this.$router.push('/')
        }
    },
};
</script>

<style scoped>
.product-container {
    display: flex;
    gap: 2rem;
}

.image-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.product-image {
    max-width: 100%;
    max-height: 400px;
    object-fit: contain;
}

.details-container {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.rating {
    display: flex;
    align-items: center;
}

.rating-value {
    margin-right: 5px;
}

.wishlist-icon {
    cursor: pointer;
}

.add-to-cart-button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.add-to-cart-button:hover {
    background-color: #45a049;
}

@media (max-width: 768px) {
    .product-container {
        flex-direction: column;
    }
}
</style>
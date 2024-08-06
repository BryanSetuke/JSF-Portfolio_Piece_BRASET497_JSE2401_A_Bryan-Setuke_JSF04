<template>
    <div
        id="product-card"
        class="border rounded-lg p-4 transition-transform transform hover:scale-105 card"
    >
        <router-link
            :to="`/product/${product.id}`"
            class="flex justify-center item-center"
        >
            <img
                :src="product.image"
                alt="Product Image"
                class="product-image"
            />
        </router-link>
        <h4 class="font-bold text-lg mt-2">{{ product.title }}</h4>
        <p class="text-gray-600">{{ product.category }}</p>
        <p class="text-xl font-semibold">${{ product.price.toFixed(2) }}</p>
        <div class="rating">
            <span class="rating-value">{{
                product.rating.rate.toFixed(1)
            }}</span>
            <span class="rating-stars">
                <i
                    class="fas fa-star"
                    :class="getStarColor(product.rating.rate)"
                ></i>
            </span>
            <span
                @click="toggleWishlist"
                :class="{ 'text-red-500': isWished, 'bg-white': !isWished }"
                class="wishlist-icon"
            >
                <i class="fas fa-heart"></i>
            </span>
        </div>
        <div class="button-container">
            <button @click="addToCart" class="add-to-cart-button">
                <i class="fas fa-cart-plus mr-1"></i> Add to Cart
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
            alert("Added to cart!");
        },
        toggleWishlist() {
            this.isWished = !this.isWished;
        },
        getStarColor(rating) {
            if (rating >= 4) return "text-yellow-500"; // Gold for 4 and above
            if (rating >= 2.5) return "text-orange-500"; // Orange for 2.5 to 3.9
            return "text-gray-300"; // Gray for below 2.5
        },
    },
};
</script>

<style scoped>
#product-card {
    background-color: #fff;
}
.product-image {
    width: 100%;
    margin-top: 1.25rem;
    height: 12rem;
    object-fit: contain;
}

.rating {
    display: flex;
    align-items: center; /* Center items vertically */
    margin-top: 5px; /* Space above the rating */
}

.rating-value {
    font-weight: bold;
    margin-right: 5px; /* Space between value and star */
}

.rating-stars .fas {
    color: gold; /* Default star color */
}

.wishlist-icon {
    cursor: pointer; /* Change cursor to pointer */
    font-size: 1.5rem; /* Increase size for better visibility */
    margin-left: 10px; /* Space between star and heart icon */
    background-color: white; /* Default background color */
    border-radius: 50%; /* Make it circular */
    padding: 5px; /* Padding for better click area */
    transition: background-color 0.3s; /* Smooth transition for background color */
}

.wishlist-icon:hover {
    background-color: #f0f0f0; /* Light gray on hover */
}

.add-to-cart-button {
    background-color: #4caf50; /* Green background */
    color: white; /* White text */
    border: none; /* No border */
    padding: 10px 15px; /* Padding */
    border-radius: 5px; /* Rounded corners */
    cursor: pointer; /* Pointer cursor */
    transition: background-color 0.3s, transform 0.3s; /* Transition for hover effect */
}

.add-to-cart-button:hover {
    background-color: #45a049; /* Darker green on hover */
    transform: scale(1.05); /* Slightly enlarge on hover */
}

.button-container {
    display: flex;
    justify-content: flex-end; /* Align button to the right */
    margin-top: auto; /* Push button to the bottom of the card */
}
</style>

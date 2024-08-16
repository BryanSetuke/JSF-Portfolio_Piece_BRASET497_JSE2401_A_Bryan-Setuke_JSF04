<template>
  <div id="app" class="bg-gray-200 min-h-screen">
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-brand">
          <img src="../public/logo-icon.jpg" alt="Logo" class="logo" />
          <span class="navbar-title">SwiftCart</span>
        </div>
        <div class="navbar-search">
          <input 
            type="text" 
            v-model="searchQuery" 
            @input="filterBySearch" 
            placeholder="Search for all products..." 
            class="search-input"
          />
          <button class="search-button">
            <i class="fas fa-search"></i>
          </button>
        </div>
        <div class="navbar-icons">
          <div class="icon-container">
            <button class="icon-button">
              <i class="fas fa-home"></i>
            </button>
          </div>
          <div class="icon-container" @mouseover="showProfilePopup = true" @mouseleave="showProfilePopup = false">
            <button class="icon-button">
              <i class="fas fa-user"></i>
            </button>
            <div v-if="showProfilePopup" class="popup-form profile-popup">
              <div>Login</div>
              <div>Create Account</div>
              <div>My Account</div>
              <div>My Orders</div>
            </div>
          </div>
          <div class="icon-container" @mouseover="showCartPopup = true" @mouseleave="showCartPopup = false">
            <button class="icon-button">
              <i class="fas fa-shopping-cart"></i>
            </button>
            <div v-if="showCartPopup" class="popup-form cart-popup">
              <div>Your cart</div>
              <!-- Add cart details here -->
            </div>
          </div>
          <div class="icon-container">
            <button class="icon-button">
              <i class="fas fa-heart"></i>
            </button>
          </div>
        </div>
        <button class="mobile-menu-button" @click="toggleMobileMenu">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div class="mobile-menu" :class="{ 'is-active': mobileMenuOpen }">
        <div class="mobile-search">
          <input 
            type="text" 
            v-model="searchQuery" 
            @input="filterBySearch" 
            placeholder="Search for all products..." 
            class="search-input"
          />
          <button class="search-button">
            <i class="fas fa-search"></i>
          </button>
        </div>
        <div class="mobile-icons">
          <button class="icon-button"><i class="fas fa-home"></i> Home</button>
          <button class="icon-button"><i class="fas fa-user"></i> Profile</button>
          <button class="icon-button"><i class="fas fa-shopping-cart"></i> Cart</button>
          <button class="icon-button"><i class="fas fa-heart"></i> Favorites</button>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Reactive state variables
const selectedCategory = ref('');
const priceRange = ref('');
const searchQuery = ref('');
const categories = ref(['Electronics', 'Books', 'Clothing']);
const showProfilePopup = ref(false);
const showCartPopup = ref(false);
const mobileMenuOpen = ref(false);

// Methods
function filterByCategory() {
  // Implement your category filter logic here
}

function filterByPrice() {
  // Implement your price filter logic here
}

function filterBySearch() {
  // Implement your search filter logic here
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}
</script>


<style scoped>
.navbar {
  background-color: #1F2937;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.logo {
  height: 40px;
  margin-right: 10px;
}

.navbar-title {
  color: white;
  font-size: 24px;
  font-weight: bold;
}

.navbar-search {
  display: flex;
  align-items: center;
  flex-grow: 1;
  max-width: 400px;
  margin: 0 20px;
}

.search-input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  background-color: #f7f7f9;
  color: black;
}

.search-button {
  padding: 10px;
  border: none;
  background-color: #4B5563;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  color: white;
}

.navbar-icons {
  display: flex;
}

.icon-container {
  position: relative;
  margin-left: 15px;
}

.icon-button {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
}

.icon-button:hover {
  color: #EF4444;
}

.popup-form {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 1000;
}

.profile-popup {
  width: 150px;
  right: 0;
}

.cart-popup {
  width: 200px;
  right: 0;
}

.mobile-menu-button {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

.mobile-menu {
  display: none;
  background-color: #1F2937;
  padding: 10px;
}

.mobile-search {
  display: flex;
  margin-bottom: 10px;
}

.mobile-icons {
  display: flex;
  flex-direction: column;
}

.mobile-icons .icon-button {
  padding: 10px;
  text-align: left;
  font-size: 16px;
}

@media (max-width: 768px) {
  .navbar-search, .navbar-icons {
    display: none;
  }

  .mobile-menu-button {
    display: block;
  }

  .mobile-menu.is-active {
    display: block;
  }
}
</style>
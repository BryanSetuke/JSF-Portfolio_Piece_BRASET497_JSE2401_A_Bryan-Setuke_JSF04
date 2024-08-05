<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar-brand">
        <img src="../public/logo-icon.jpg" alt="Logo" class="logo" /> <!-- Replace with your logo path -->
        <span class="navbar-title">SwiftCart</span>
      </div>
      <div class="navbar-filters">
        <select v-model="selectedCategory" @change="filterByCategory" class="filter-select">
          <option value="">All Categories</option>
          <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
        </select>
        <select v-model="sortOrder" @change="sortByPrice" class="filter-select">
          <option value="asc">Price Low to High</option>
          <option value="desc">Price High to Low</option>
        </select>
      </div>
      <div class="navbar-search">
        <input 
          type="text" 
          v-model="searchQuery" 
          @input="filterBySearch" 
          placeholder="Search for products..." 
          class="search-input"
        />
        <button class="search-button">
          <i class="fas fa-search"></i>
        </button>
      </div>
      <div class="navbar-icons">
        <button class="icon-button">
          <i class="fas fa-heart"></i>
        </button>
        <button class="icon-button">
          <i class="fas fa-shopping-cart"></i>
        </button>
        <button class="icon-button">
          <i class="fas fa-user"></i>
        </button>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: '',
      sortOrder: 'asc',
      searchQuery: '',
      categories: [], // Populate this from your API or define statically
    };
  },
  methods: {
    filterByCategory() {
      // Implement your category filter logic here
    },
    sortByPrice() {
      // Implement your sorting logic here
    },
    filterBySearch() {
      // Implement your search filter logic here
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #1F2937; /* Navbar background */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.logo {
  height: 40px; /* Adjust logo size */
  margin-right: 10px;
}

.navbar-title {
  color: white;
  font-size: 24px;
  font-weight: bold;
}

.navbar-filters {
  display: flex;
  align-items: center;
}

.filter-select {
  margin: 0 10px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #374151; /* Input background */
  color: white;
}

.navbar-search {
  display: flex;
  align-items: center;
  flex-grow: 1;
  max-width: 400px; /* Limit search bar width */
  margin: 0 20px;
}

.search-input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  background-color: #374151; /* Input background */
  color: white;
}

.search-button {
  padding: 10px;
  border: none;
  background-color: #4B5563; /* Button background */
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.icon-button {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  margin-left: 15px;
  cursor: pointer;
}

.icon-button:hover {
  color: #EF4444; /* Change color on hover */
}
</style>

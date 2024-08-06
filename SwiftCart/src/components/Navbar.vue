<template>
    <nav class="navbar">
        <div class="navbar-content">
            <a href="/" class="navbar-item">
                <i class="fas fa-home"></i> Home
            </a>
            <input
                type="text"
                placeholder="Search products..."
                class="search-input"
            />
            <button class="add-to-cart-button">
                <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
};
</script>

<style scoped>
.navbar {
    background-color: #4caf50; /* Match the Add to Cart button color */
    padding: 10px; /* Padding for the navbar */
    display: flex; /* Flexbox for layout */
    align-items: center; /* Center items vertically */
}

.navbar-content {
    display: flex; /* Flexbox for navbar items */
    align-items: center; /* Center items vertically */
    width: 100%; /* Full width */
}

.navbar-item {
    color: white; /* Text color */
    margin-right: 20px; /* Space between items */
    text-decoration: none; /* Remove underline */
    transition: color 0.3s; /* Transition for hover effect */
}

.navbar-item:hover {
    color: #45a049; /* Change color on hover */
}

.search-input {
    background-color: white; /* White background for search input */
    border: 1px solid #ccc; /* Light gray border */
    padding: 8px; /* Padding */
    border-radius: 4px; /* Rounded corners */
    margin-right: 20px; /* Space between input and button */
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
</style>

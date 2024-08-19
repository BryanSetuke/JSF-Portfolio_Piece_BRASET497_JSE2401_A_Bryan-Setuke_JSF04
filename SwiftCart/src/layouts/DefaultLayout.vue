<template>
  <div class="default-layout">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link to="/cart">Cart</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
      </ul>
    </nav>
    <main>
      <slot></slot>
    </main>
    <footer>
      <p>&copy; 2024 FakeStore</p>
    </footer>
  </div>
</template>

<style scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
nav {
  background-color: #444;
  color: #fff;
  padding: 1rem;
}
nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}
nav a {
  color: #fff;
  text-decoration: none;
}
main {
  flex: 1;
  padding: 2rem;
}
footer {
  background-color: #444;
  color: #fff;
  text-align: center;
  padding: 1rem;
}
</style>

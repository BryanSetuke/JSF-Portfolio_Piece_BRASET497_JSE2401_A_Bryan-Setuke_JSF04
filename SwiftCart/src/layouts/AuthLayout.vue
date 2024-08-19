<template>
  <div class="auth-layout">
    <header>
      <h1>Welcome to FakeStore</h1>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <p>&copy; 2024 FakeStore</p>
    </footer>
  </div>
</template>

<style scoped>
.auth-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
header {
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
}
main {
  flex: 1;
  padding: 2rem;
}
footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
}
</style>

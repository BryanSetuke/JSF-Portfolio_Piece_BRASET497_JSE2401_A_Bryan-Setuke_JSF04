<template>
  <form @submit.prevent="login">
    <div>
      <label for="username">Username:</label>
      <input v-model="username" type="text" id="username" required />
    </div>
    <div>
      <label for="password">Password:</label>
      <PasswordToggle v-model="password" />
    </div>
    <button type="submit">Login</button>
    <p v-if="error">{{ error }}</p>
  </form>
</template>

<script>
import PasswordToggle from './PasswordToggle.vue';

export default {
  components: {
    PasswordToggle,
  },
  data() {
    return {
      username: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch('https://fakestoreapi.com/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        });

        if (!response.ok) {
          throw new Error('Login failed');
        }

        const data = await response.json();
        localStorage.setItem('token', data.token);
        this.$router.push('/');
      } catch (error) {
        this.error = error.message;
      }
    },
  },
};
</script>

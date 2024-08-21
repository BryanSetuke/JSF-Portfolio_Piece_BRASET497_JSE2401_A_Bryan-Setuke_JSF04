<template>
  <form @submit.prevent="submit">
    <div>
      <label for="email">Email:</label>
      <input v-model="email" type="email" id="email" required />
    </div>

    <div>
      <label for="password">Password:</label>
      <input :type="passwordVisible ? 'text' : 'password'" v-model="password" id="password" required />
      <PasswordToggle @toggle="togglePasswordVisibility" />
    </div>

    <button type="submit" :disabled="loading">
      <LoadingSpinner v-if="loading" />
      Login
    </button>

    <p v-if="errorMessage">{{ errorMessage }}</p>
  </form>
</template>

<script>
import { useAuthStore } from '../../store/modules/auth';
import { useRouter } from 'vue-router';
import PasswordToggle from './PasswordToggle.vue';
import LoadingSpinner from '../../components/common/LoadingSpinnner.vue';

export default {
  components: { PasswordToggle, LoadingSpinner },
  data() {
    return {
      email: '',
      password: '',
      passwordVisible: false,
      loading: false,
      errorMessage: '',
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
    async submit() {
      if (!this.email || !this.password) {
        this.errorMessage = 'Please fill out all fields';
        return;
      }
      this.loading = true;
      const authStore = useAuthStore();
      try {
        await authStore.login({ email: this.email, password: this.password });
        const router = useRouter();
        router.push(router.currentRoute.value.query.redirect || '/');
      } catch (error) {
        this.errorMessage = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

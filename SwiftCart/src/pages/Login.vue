<template>
  <AuthLayout>
    <LoginForm />
  </AuthLayout>
</template>

<script>
import AuthLayout from '../layouts/AuthLayout.vue';
import LoginForm from '../components/auth/LoginForm.vue';

export default {
  components: {
    AuthLayout,
    LoginForm,
  },
};
</script>

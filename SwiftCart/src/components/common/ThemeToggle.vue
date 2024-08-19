<template>
  <button @click="toggleTheme" class="theme-toggle">
    {{ isDarkTheme ? '🌞 Light Mode' : '🌙 Dark Mode' }}
  </button>
</template>

<script>
export default {
  name: 'ThemeToggle',
  computed: {
    isDarkTheme() {
      return this.$store.state.theme.isDark;
    }
  },
  methods: {
    toggleTheme() {
      this.$store.commit('theme/toggleTheme');
    }
  }
}
</script>

<style scoped>
.theme-toggle {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}
</style>

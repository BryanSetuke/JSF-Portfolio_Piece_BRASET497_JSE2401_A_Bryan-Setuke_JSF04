<template>
  <button :class="buttonClass" @click="handleClick">
    <slot>{{ label }}</slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      default: 'Click Me'
    },
    type: {
      type: String,
      default: 'button' // button, submit, reset
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    buttonClass() {
      return `btn ${this.className}`;
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    }
  }
}
</script>

<style scoped>
.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
}
.btn:hover {
  opacity: 0.8;
}
</style>

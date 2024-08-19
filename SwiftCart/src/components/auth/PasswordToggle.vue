<template>
  <div>
    <input :type="visible ? 'text' : 'password'" v-model="password" />
    <button type="button" @click="toggleVisibility">
      {{ visible ? 'Hide' : 'Show' }}
    </button>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    password: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
  methods: {
    toggleVisibility() {
      this.visible = !this.visible;
    },
  },
};
</script>

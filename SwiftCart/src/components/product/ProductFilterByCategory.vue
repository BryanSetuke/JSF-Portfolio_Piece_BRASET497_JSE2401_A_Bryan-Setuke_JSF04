<template>
    <div>
        <select @change="onCategoryChange">
            <option value="">All Categories</option>
            <option v-for="category in categories" :key="category.id" :value="category.name">
                {{ category.name }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    props: {
        categories: Array,
    },
    methods: {
        onCategoryChange(event) {
            this.$emit('filter', event.target.value);
        },
    },
};
</script>

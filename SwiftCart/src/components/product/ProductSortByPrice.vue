<template>
    <div>
        <select @change="onSortChange">
            <option value="">Sort By Price</option>
            <option value="lowest">Lowest Price</option>
            <option value="highest">Highest Price</option>
        </select>
    </div>
</template>

<script>
export default {
    methods: {
        onSortChange(event) {
            this.$emit('sort', event.target.value);
        },
    },
};
</script>

<script setup lang="ts">
    const prop = defineProps<{text: string}>()
</script>

<template>
    <span style="color: red;">
        {{ prop.text }}
    </span>
</template>
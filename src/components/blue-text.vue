<script setup lang="ts">
    const prop = defineProps<{text: string}>()
</script>

<template>
    <span style="color: blue;">
        {{ prop.text }}
    </span>
</template>
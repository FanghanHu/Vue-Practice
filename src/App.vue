<script setup lang="ts">
  import loadComponent from './component-loader';
  import RedText from '@/components/red-text.vue';

  //we need this arrow function in order to get proper typescript support
  const MyText = loadComponent(() => import(`@/components/red-text.vue`));

</script>

<template>
  <main>
    <RedText text="Original Text Component" />
    <br/>
    <MyText text="My Modified Text Component" />
  </main>
</template>

<style scoped>
</style>

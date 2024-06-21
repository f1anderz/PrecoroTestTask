<template>
  <header>
    <PTTHeader />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import PTTHeader from './components/Header/PTTHeader.vue'
</script>

<style lang="scss">
@import '@/assets/scss/style';
</style>
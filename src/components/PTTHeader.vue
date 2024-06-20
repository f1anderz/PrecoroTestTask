<template>
  <div class="ptt__header">
    <PTTNavigation />
    <PTTControls />
  </div>
</template>

<script setup lang="ts">
import PTTNavigation from './PTTNavigation.vue'
import PTTControls from './PTTControls.vue'
</script>

<style lang="scss" scoped>
@use '@/assets/scss/style';

.ptt__header {
  padding: .25rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: style.$header-gradient;
  color: style.$secondary-text-color;
}
</style>

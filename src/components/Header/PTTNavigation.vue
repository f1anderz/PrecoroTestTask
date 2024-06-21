<template>
  <nav class="ptt__nav">
    <div>Dashboard</div>
    <img src="@/assets/images/icons/right-arrow.svg" alt="Arrow">
    <div>User Managment</div>
  </nav>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
@use '@/assets/scss/style';

.ptt__nav {
  padding: .25rem .5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  font-weight: 400;
}
</style>
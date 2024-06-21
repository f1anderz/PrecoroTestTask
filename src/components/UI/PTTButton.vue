<template>
  <div class="ptt__button" :class="{ 'disabled': !props.enabled }" @click="emit('click')">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['enabled']);
const emit = defineEmits(['click']);
</script>

<style lang="scss" scoped>
@use '@/assets/scss/style';

.ptt__button {
  padding: .3rem 1rem;
  font-size: .875rem;
  border-radius: 1rem;
  background: style.$text-color;
  color: style.$secondary-text-color;

  &:hover {
    cursor: default;
  }
}

.disabled {
  background: style.$disabled-button-color;
}
</style>
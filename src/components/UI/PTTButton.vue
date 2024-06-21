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
  transition: transform .3s ease;

  &:hover {
    cursor: default;
    background: style.$hover-button-color;
    transform: translate(.02rem, -.02rem);
  }
}

.disabled {
  background: style.$disabled-button-color;

  &:hover {
    background: style.$disabled-button-color;
    transform: none;
  }
}
</style>
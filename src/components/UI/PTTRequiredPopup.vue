<template>
  <div class="ptt__required-popup" :class="{ hidden: !props.visible }">
    Choose Date, Substitute User and Backup Approver to enable Vacation Mode
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['visible']);
</script>

<style lang="scss" scoped>
@use '@/assets/scss/style';

.ptt__required-popup {
  position: absolute;
  width: 14.5rem;
  padding: 0.15rem 0.4rem;
  border-radius: 0.25rem;
  background: rgba($color: style.$text-color, $alpha: 0.9);
  color: style.$secondary-text-color;
  font-size: 0.69rem;
  font-weight: 300;
  opacity: 1;
  transition: opacity 0.35s ease;

  &:before {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0;
    top: -22%;
    left: 78%;
    border-top: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid rgba($color: style.$text-color, $alpha: 0.9);
    border-left: 4px solid transparent;
  }

  &:hover {
    cursor: default;
  }
}

.hidden {
  opacity: 0;
}
</style>

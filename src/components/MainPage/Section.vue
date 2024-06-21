<template>
  <div class="ptt__section">
    <div class="ptt__section-info">
      <div class="ptt__section-info-header">
        <slot v-if="!props.header" name="header"></slot>
        <span v-else>{{ props.header }}</span>
      </div>
      <div class="ptt__section-info-description">{{ props.description }}</div>
    </div>
    <div class="ptt__section-content">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['header', 'description']);
</script>

<style lang="scss" scoped>
@use '@/assets/scss/style';

.ptt__section {
  width: 100%;
  padding: 1.25rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  border-bottom: 1px solid rgba($color: style.$list-color, $alpha: .1);

  &:last-child {
    border-bottom: none;
  }

  &-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: .25rem;

    &-header {
      font-weight: 600;
      color: style.$text-color;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: .5rem;
    }

    &-description {
      font-weight: 500;
      font-size: .875rem;
      color: rgba($color: style.$text-color, $alpha: .5);
    }
  }
}
</style>
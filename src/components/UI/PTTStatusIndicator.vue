<template>
  <div class="ptt__status-indicator enabled" v-if="props.status">
    <img class="ptt__status-indicator-image" src="@/assets/images/icons/tick.svg" alt="Enabled">
    <div class="ptt__status-indicator-text">Enabled</div>
  </div>
  <div class="ptt__status-indicator disabled" v-else>
    <img class="ptt__status-indicator-image" src="@/assets/images/icons/cross.svg" alt="Disabled">
    <div class="ptt__status-indicator-text">Disabled</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['status']);
</script>

<style lang="scss" scoped>
@use '@/assets/scss/style';

.ptt__status-indicator {
  padding: .15rem .5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: .25rem;
  border-radius: 1rem;
  font-weight: 500;

  &-text {
    font-size: .75rem;
  }
}

.enabled {
  background: style.$enabled-background;
  color: style.$enabled-color;
}

.disabled {
  background: style.$disabled-background;
  color: style.$disabled-color;
}
</style>
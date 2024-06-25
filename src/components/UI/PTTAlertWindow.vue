<template>
  <div class="ptt__alert-window" :class="{ hidden: !vacationStore.showPopup }">
    <img src="@/assets/images/icons/success.svg" alt="Success" />
    <div class="ptt__alert-window-text">
      <div class="ptt__alert-window-text-caption">SUCCESS</div>
      <div class="ptt__alert-window-text-info">Updated successfully.</div>
    </div>
    <div
      class="ptt__alert-window-close"
      @click="vacationStore.showPopup = false"
    >
      CLOSE
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVacationStore } from '../../stores/vacation';

const vacationStore = useVacationStore();
</script>

<style lang="scss" scoped>
@use '@/assets/scss/style';

.ptt__alert-window {
  position: absolute;
  top: 7.5%;
  right: 1%;
  z-index: 5;
  padding-left: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.5s ease-in-out;
  background: style.$background-color;
  filter: drop-shadow(3px 3px 22px rgba(0, 0, 0, 0.09));
  border-left: 4px solid style.$success-color;
  border-radius: 0.25rem;

  & img {
    display: block;
    width: 1.8rem;
    height: 1.8rem;
  }

  &-text {
    min-width: 16rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.15rem;
    padding: 0.35rem 0.25rem;
    border-right: 1px solid rgba($color: style.$text-color, $alpha: 0.1);

    &-caption {
      color: style.$text-color;
      font-size: 0.875rem;
      font-weight: 700;
    }

    &-info {
      color: rgba($color: style.$text-color, $alpha: 0.5);
      font-size: 0.875rem;
      font-weight: 500;
    }
  }

  &-close {
    padding-right: 0.5rem;
    color: rgba($color: style.$text-color, $alpha: 0.5);
    font-size: 0.625rem;
    font-weight: 500;
  }
}

.hidden {
  opacity: 0;
  z-index: -1;
}
</style>

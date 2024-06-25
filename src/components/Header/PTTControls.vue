<template>
  <div class="ptt__controls">
    <div class="ptt__controls-item">
      <img src="@/assets/images/icons/buy-now.svg" alt="" />
      <div>Buy now</div>
    </div>
    <div class="ptt__controls-item">
      <img src="@/assets/images/icons/onboarding.svg" alt="" />
      <div>Onboarding</div>
    </div>
    <div class="ptt__controls-item">
      <img src="@/assets/images/icons/help-center.svg" alt="" />
      <div>Help center</div>
    </div>
    <div class="ptt__controls-item">
      <img src="@/assets/images/icons/down-arrow.svg" alt="" />
      <div>user@email.com</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use '@/assets/scss/style';
@use '@/assets/scss/mixins';

.ptt__controls {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;

  &-item {
    padding: 0.25rem 0.75rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    border-radius: 1rem;
    font-weight: 400;

    & img,
    & div {
      transition: transform 0.3s ease;
    }

    &:hover {
      background: rgba($color: style.$background-color, $alpha: 0.1);
      cursor: default;

      & img,
      & div {
        transform: translateY(0.04rem);
      }

      &:last-child {
        & img,
        & div {
          transform: translate(0.02rem, -0.04rem);
        }
      }
    }

    &:last-child {
      gap: 0.75rem;
    }
  }
}
</style>

<template>
  <div class="ptt__controls">
    <div class="ptt__controls-item">
      <img src="@/assets/images/icons/buy-now.svg" alt="">
      <div>Buy now</div>
    </div>
    <div class="ptt__controls-item">
      <img src="@/assets/images/icons/onboarding.svg" alt="">
      <div>Onboarding</div>
    </div>
    <div class="ptt__controls-item">
      <img src="@/assets/images/icons/help-center.svg" alt="">
      <div>Help center</div>
    </div>
    <div class="ptt__controls-item">
      <img src="@/assets/images/icons/down-arrow.svg" alt="">
      <div>user@email.com</div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@use '@/assets/scss/style';
@use '@/assets/scss/mixins';

.ptt__controls {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: .75rem;

  &-item {
    padding: .25rem .75rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: .5rem;
    border-radius: 1rem;
    font-weight: 400;

    & img,
    & div {
      transition: transform .3s ease;
    }

    &:hover {
      background: rgba($color: style.$background-color, $alpha: .1);
      cursor: default;

      & img,
      & div {
        transform: translateY(.04rem);
      }

      &:last-child {

        & img,
        & div {
          transform: translate(.02rem, -.04rem);
        }
      }
    }

    &:last-child {
      gap: .75rem;
    }
  }
}
</style>
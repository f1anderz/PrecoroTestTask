<template>
  <div class="ptt__select-item" @click="emit('click', props.user)">
    <div class="ptt__select-item-name">
      {{ props.user.fullName }}
    </div>
    <div class="ptt__select-item-email">
      {{ props.user.email }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['user'])
const emit = defineEmits(['click'])
</script>

<style lang="scss" scoped>
@use '@/assets/scss/style';

.ptt__select-item {
  padding: .25rem .5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: .25rem;
  color: style.$text-color;

  &:hover {
    cursor: pointer;
    background: rgba($color: style.$text-color, $alpha: .1);
  }

  &-email {
    padding-left: .5rem;
    color: rgba($color: style.$text-color, $alpha: .75)
  }
}
</style>
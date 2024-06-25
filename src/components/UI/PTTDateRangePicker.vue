<template>
  <div class="ptt__date-range">
    <div class="ptt__date-range-input">
      <img
        id="open-range"
        src="@/assets/images/icons/calendar.svg"
        alt="Date"
        @click="rangePickerVisible = !rangePickerVisible"
      />
      <div class="ptt__date-range-input-field">
        From
        <span
          :class="{
            'ptt__date-range-input-field-dimmed': !date,
            'ptt__date-range-input-field-highlighted': date,
          }"
        >
          {{ dateRange[0] }}</span
        >
        to
        <span
          :class="{
            'ptt__date-range-input-field-dimmed': !date,
            'ptt__date-range-input-field-highlighted': date,
          }"
        >
          {{ dateRange[1] }}</span
        >
      </div>
      <img
        v-if="date"
        src="@/assets/images/icons/cross-circle.svg"
        alt="Cancel"
        @click="date = null"
      />
    </div>
    <VueDatePicker
      v-if="rangePickerVisible"
      class="ptt__date-range-picker"
      v-model="date"
      range
      inline
      :enable-time-picker="false"
      :action-row="{ showPreview: false }"
      v-click-outside="handleOutsideClick"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, computed, watch } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
const emit = defineEmits(['dateSelect']);

const rangePickerVisible = ref(false);
const date = ref();

const formatDate = (date: Date) => {
  return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${(
    '0' + date.getDate()
  ).slice(-2)}`;
};

const dateRange: Ref<string[]> = computed(() => {
  if (date.value) {
    rangePickerVisible.value = false;
    return [`${formatDate(date.value[0])}`, `${formatDate(date.value[1])}`];
  } else {
    return ['yyyy-mm-dd', 'yyyy-mm-dd'];
  }
});

const handleOutsideClick = (e: any) => {
  if (e.target.id !== 'open-range') {
    rangePickerVisible.value = false;
  }
};

watch(date, () => {
  emit('dateSelect', date.value);
});
</script>

<style lang="scss" scoped>
@use '@/assets/scss/style';

.ptt__date-range {
  position: relative;
  padding: 0.4rem 0.6rem;
  border: 1px solid rgba($color: style.$text-color, $alpha: 0.1);
  border-radius: 0.25rem;

  &-input {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;

    &-field {
      width: fit-content;
      border: none;
      color: style.$text-color;
      font-size: 0.875rem;
      text-align: center;
      font-weight: 500;

      &-dimmed {
        color: rgba($color: style.$text-color, $alpha: 0.5);
      }

      &-highlighted {
        font-weight: 600;
      }
    }
  }

  &-picker {
    position: absolute;
    z-index: 2;
    left: calc(-39% - 1px);
    top: calc(100% + 4px);

    &:before {
      content: ' ';
      position: absolute;
      top: -8px;
      left: 45%;
      width: 0;
      height: 0;
      border-top: 4px solid transparent;
      border-right: 4px solid transparent;
      border-bottom: 4px solid rgba($color: #000000, $alpha: 0.1);
      border-left: 4px solid transparent;
    }
  }
}
</style>

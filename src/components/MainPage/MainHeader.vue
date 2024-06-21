<template>
  <div class="ptt__main-header">
    <div class="ptt__main-header-text">Vacation Mode Settings</div>
    <div class="ptt__main-header-button">
      <PTTButton :enabled="vacationStore.allowUpdate" @click="handleUpdateClick">Update</PTTButton>
      <PTTRequiredPopup :visible="showRequiredPopup" class="ptt__main-header-button-popup" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import PTTButton from '../UI/PTTButton.vue'
import PTTRequiredPopup from '../UI/PTTRequiredPopup.vue'
import { useVacationStore } from '../../stores/vacation';

const vacationStore = useVacationStore()

const showRequiredPopup = ref(false);

const handleUpdateClick = () => {
  if (!vacationStore.allowUpdate) {
    showRequiredPopup.value = true;
  } else {
    vacationStore.patchData()
  }
}

watch(vacationStore, () => {
  if (vacationStore.allowUpdate) {
    showRequiredPopup.value = false;
  }
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/style';

.ptt__main-header {
  width: 100%;
  padding: .75rem 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid rgba(29, 36, 82, 0.1);

  &-text {
    font-size: 1.25rem;
    font-weight: 700;
    color: style.$text-color;
  }

  &-button {
    position: relative;

    &-popup {
      position: absolute;
      top: calc(100% + 4px);
      left: -175%;
    }
  }
}
</style>
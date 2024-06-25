<template>
  <div class="vacation-mode-page">
    <PTTAlertWindow />

    <Header />

    <Body />
  </div>
</template>

<script setup lang="ts">
import { useVacationStore } from '../stores/vacation';
import Header from '../components/MainPage/MainHeader.vue';
import Body from '../components/MainPage/MainBody.vue';
import PTTAlertWindow from '../components/UI/PTTAlertWindow.vue';
import { onBeforeRouteLeave } from 'vue-router';

const vacationStore = useVacationStore();

const checkUnsaved = () => {
  if (vacationStore.unsavedChanges) {
    const answer = window.confirm(
      'Do you really want to leave? you have unsaved changes!'
    );
    if (!answer) return false;
  }
};

window.onbeforeunload = checkUnsaved;

onBeforeRouteLeave(() => {
  if (!checkUnsaved()) {
    return false;
  }
});

vacationStore.savedData = { ...vacationStore.data };
</script>

<style lang="scss" scoped>
@use '@/assets/scss/style';

.vacation-mode-page {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>

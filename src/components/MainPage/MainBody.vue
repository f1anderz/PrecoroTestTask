<template>
  <div class="ptt__main-body">
    <Section
      description="Select Date, Substitute User and Backup Approver to Enable Vacation Mode."
    >
      <template #header>
        <span>Vacation mode</span>
        <PTTStatusIndicator :status="vacationStore.vacationStatus" />
      </template>
      <template #default>
        <PTTDateRangePicker @dateSelect="handleDateSelect" />
      </template>
    </Section>
    <Section
      header="Substitute User"
      description="Performs approval actions while you are away."
    >
      <PTTSelect
        placeholder="Select Substitute"
        @userSelect="handleUserSelect"
        @userRemove="handleRemoveSubstitute"
      >
        <span class="sub-text"
          >Substitute User <span class="required">*</span></span
        >
      </PTTSelect>
    </Section>
    <Section
      header="Backup Approver"
      description="Performs approval actions while you are away.
            Below, you can select the necessary Approvers."
    >
      <ApproversTable />
    </Section>
  </div>
</template>

<script setup lang="ts">
import { User } from '../../common/types';
import PTTDateRangePicker from '../UI/PTTDateRangePicker.vue';
import PTTStatusIndicator from '../UI/PTTStatusIndicator.vue';
import PTTSelect from '../UI/PTTSelect.vue';
import Section from '../MainPage/Section.vue';
import ApproversTable from '../MainPage/ApproversTable.vue';
import { useVacationStore } from '../../stores/vacation';

const vacationStore = useVacationStore();

const handleDateSelect = (dates: Date[]) => {
  vacationStore.data.vacationDate = dates;
};

const handleUserSelect = (user: User) => {
  vacationStore.data.substituteUser = user;
};

const handleRemoveSubstitute = (user: string) => {
  vacationStore.removeSubstitute(user);
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/style';

.ptt__main-body {
  width: 100%;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.sub-text {
  color: rgba($color: style.$text-color, $alpha: 0.5);
  font-size: 0.8125rem;
  font-weight: 600;
}

.required {
  color: style.$required-color;
}
</style>

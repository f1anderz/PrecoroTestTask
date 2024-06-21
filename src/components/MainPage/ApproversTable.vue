<template>
  <div class="approvers-table">
    <div class="approvers-table-head">
      <div class="approvers-table-head-title">Document</div>
      <div class="approvers-table-head-title">Approval Step</div>
      <div class="approvers-table-head-title">Backup Approver</div>
    </div>
    <transition-group name="table">
      <div class="approvers-table-cell" v-for="document in tableData" :key="document.id">
        <div class="approvers-table-cell-row-name">{{ document.name }}</div>
        <div class="approvers-table-cell-row" style="grid-column: 2 / 4;">
          <transition-group name="steps">
            <div class="approvers-table-cell-row-steps" v-for="step in document.approvalSteps" :key="step.id">
              <div class="approvers-table-cell-row-steps-step">
                <div class="approvers-table-cell-row-steps-step-number">
                  {{ step.stepNumber }}
                </div>
                <div class="approvers-table-cell-row-steps-step-name">{{ step.stepName }}</div>
              </div>
              <PTTSelect class="approvers-table-cell-row-steps-select" placeholder="Select" borders="false"
                @userSelect="(user: User) => { handleApproverSelect({ id: step.id, user: user }) }"
                @userRemove="handleUserRemove" />
            </div>
          </transition-group>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'
import { AxiosResponse, AxiosError } from 'axios'
import dataRequests from '../../api/data'
import { Document, ApprovalStep, User, BackupApprover } from '../../common/types'
import PTTSelect from '../UI/PTTSelect.vue'
import { useVacationStore } from '../../stores/vacation'

const vacationStore = useVacationStore()

const tableData: Ref<Document[]> = ref([])

const loadData = () => {
  dataRequests.getData().then(({ data: response }: AxiosResponse) => {
    response.data.documents.forEach((document: Document) => {
      response.data.approvalSteps.forEach((approvalStep: ApprovalStep) => {
        if (approvalStep.documentId === document.id) {
          vacationStore.approversCount++;
          if (document.approvalSteps) {
            document.approvalSteps.push(approvalStep);
          } else {
            document.approvalSteps = [approvalStep];
          }
        }
      })
    })
    tableData.value = response.data.documents.filter((document: Document) => {
      if (document.approvalSteps) {
        return document;
      }
    }).sort((document1: Document, document2: Document) => { return document2.approvalSteps.length - document1.approvalSteps.length })
  }).catch((error: AxiosError) => {
    console.log(error);
  });
}

loadData();

const handleApproverSelect = (approver: BackupApprover) => {
  vacationStore.data.approverUsers.push(approver)
}

const handleUserRemove = (email: string) => {
  vacationStore.removeApprover(email);
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/style';

.approvers-table {
  width: 96vw;
  display: grid;
  grid-template-columns: 8fr 13fr 12.3fr;
  row-gap: 1.35rem;

  &-head {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: subgrid;
    background: style.$table-header-background;
    border-radius: .5rem .5rem 0 0;

    &-title {
      padding: .4rem 1.1rem;
      border-left: 1px solid rgba($color: style.$text-color, $alpha: .05);
      color: style.$ternary-text-color;
      font-size: .75rem;
      font-weight: 600;

      &:first-child {
        border: none;
      }
    }
  }

  &-cell {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: subgrid;

    &:nth-child(2) {
      margin-top: -1.35rem;

      .approvers-table-cell-row-name {
        border-radius: 0 0 0 .5rem;
      }

      .approvers-table-cell-row-steps {
        &:last-child {
          border-radius: 0 0 .5rem .5rem;
        }

        &:first-child {
          .approvers-table-cell-row-steps-select {
            border-radius: 0 0 0 0;
          }

        }
      }
    }

    &-row {
      &-name {
        height: fit-content;
        padding: .7rem 1rem;
        border: 1px solid rgba($color: style.$list-color, $alpha: .1);
        border-right: none;
        color: style.$text-color;
        font-size: .875rem;
        font-weight: 700;
        border-radius: .5rem 0 0 .5rem;
      }

      &-steps {
        display: grid;
        grid-template-columns: 13fr 12.3fr;

        &:last-child {
          .approvers-table-cell-row-steps-step {
            border-radius: 0 0 0 .5rem;
            border-bottom: 1px solid rgba($color: style.$list-color, $alpha: .1);
          }

          .approvers-table-cell-row-steps-select {
            border-radius: 0 0 .5rem 0;
            border-bottom: 1px solid rgba($color: style.$list-color, $alpha: .1);
          }
        }

        &:first-child {
          .approvers-table-cell-row-steps-step {
            border-radius: 0 0 0 0;
          }

          .approvers-table-cell-row-steps-select {
            border-radius: 0 .5rem 0 0;
          }
        }

        &-step {
          padding: .6rem .5rem;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          gap: .5rem;
          border: 1px solid rgba($color: style.$list-color, $alpha: .1);
          border-bottom: none;
          border-right: none;

          &-number {
            width: 1.25rem;
            height: 1.25rem;
            text-align: center;
            background: style.$list-color;
            color: style.$secondary-text-color;
            line-height: 1.25rem;
            border-radius: 50%;
            font-size: .75rem;
            font-weight: 600;
          }

          &-name {
            position: relative;
            color: style.$text-color;
            font-size: .875rem;
            font-weight: 600;
          }
        }

        &-select {
          padding: 0 .5rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          border: 1px solid rgba($color: style.$list-color, $alpha: .1);
          border-bottom: none;
        }
      }
    }
  }

}
</style>
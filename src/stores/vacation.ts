import { defineStore } from 'pinia';
import { User, BackupApprover } from '../common/types';
import dataRequest from '../api/data';

export const useVacationStore = defineStore('vacation', {
  state: () => ({
    vacationStatus: false,
    showPopup: false,
    savedData: {},
    data: {
      vacationDate: null as Date[] | any,
      substituteUser: {} as User | any,
      approverUsers: [] as BackupApprover[],
    },
    approversCount: 0,
  }),
  getters: {
    allowUpdate: (state) => {
      return (
        state.data.vacationDate !== null &&
        state.data.substituteUser &&
        state.data.approverUsers.length === state.approversCount
      );
    },
    backupApprovers: (state) => {
      return state.data.approverUsers.map(
        ({ id, user: { id: backupApproverId } }) => ({ id, backupApproverId })
      );
    },
    unsavedChanges: (state) => {
      return JSON.stringify(state.data) !== JSON.stringify(state.savedData);
    },
  },
  actions: {
    patchData() {
      const newData = {
        vacationMode: {
          enable: true,
          startDate: this.data.vacationDate[0].getTime() / 1000,
          endDate: this.data.vacationDate[1].getTime() / 1000,
        },
        substituteUser: this.data.substituteUser.id,
        backupApprovers: this.backupApprovers,
      };
      dataRequest
        .patchData(newData)
        .then((response) => {
          if (response.data.ok === true) {
            this.savedData = this.data;
            this.showPopup = true;
            this.vacationStatus = true;
            setTimeout(() => (this.showPopup = false), 5000);
          }
        })
        .catch((error) => console.log(error));
    },
    removeSubstitute(email: string) {
      if (this.data.substituteUser.email === email) {
        this.data.substituteUser = null;
      }
    },
    removeApprover(email: string) {
      this.data.approverUsers = this.data.approverUsers.filter(
        (approver: BackupApprover) => {
          if (approver.user.email !== email) {
            return approver;
          }
        }
      );
    },
  },
});

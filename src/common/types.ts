export interface User {
  id: number;
  email: string;
  fullName: string;
}

export interface ApprovalStep {
  id: number;
  documentId: number;
  stepNumber: number;
  stepName: string;
}

export interface Document {
  id: number;
  name: string;
  approvalSteps: ApprovalStep[];
}

export interface BackupApprover {
  id: number;
  user: User;
}

export interface vacationModeSettings {
  enable: boolean;
  startDate: number;
  endDate: number;
}

export interface patchBackupApprover {
  id: number;
  backupApproverId: number;
}

export interface patchData {
  vacationMode: vacationModeSettings;
  substituteUser: BackupApprover;
  backupApprovers: patchBackupApprover[];
}

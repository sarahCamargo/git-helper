export type FormValues = {
  taskType: TaskType | "";
  featCode: number | "";
  usCode: number | "";
  usDescription: string;
};

export enum TaskType {
  FEATURE_ISSUE = "FEATURE_ISSUE",
  HOTFIX_BUG = "HOTFIX_BUG",
  HOTFIX_FEATURE = "HOTFIX_FEATURE",
}

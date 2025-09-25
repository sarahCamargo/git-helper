export type FormValues = {
  taskType: TaskType | null;
  featCode: number | null;
  usCode: number | null;
  usDescription: string;
};

export enum TaskType {
  FEATURE_ISSUE,
  HOTFIX_BUG,
  HOTFIX_FEATURE,
}

import { useState } from "react";
import { CommitInfoProps } from "./types";
import { FormValues, TaskType } from "./components/Form/form.types";

export function useHome() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = useState<CommitInfoProps>({} as CommitInfoProps);

  const onSubmitForm = (values: FormValues) => {
    setData({
      commitMessage: buildCommitMessage(values),
      featureBranch: buildFeatureBranchName(values),
      taskBranch: buildBranchName(values),
    } as CommitInfoProps);

    setIsSubmitted(true);
  };

  function buildCommitMessage(values: FormValues): string {
    return `PR ${resolveTaskType(values.taskType)} ${values.usCode} - ${
      values.usDescription
    }`;
  }

  function buildBranchName(values: FormValues): string {
    const descriptionFormatted = getFormatted(values.usDescription);

    if (values.taskType !== TaskType.HOTFIX_BUG) {
      return `features/${values.featCode}/task/${values.usCode}_${descriptionFormatted}`;
    }
    return `hotfix/${values.usCode}/task/${values.usCode}_${descriptionFormatted}`;
  }

  function buildFeatureBranchName(values: FormValues): string {
    if (values.taskType !== TaskType.HOTFIX_BUG) {
      return `features/${values.featCode}/developer`;
    }
    return "";
  }

  function getFormatted(description: string) {
    return description
      .replace(/\s+/g, "_")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9_]/g, "")
      .toLowerCase();
  }

  function resolveTaskType(taskType: TaskType | "") {
    if (taskType == TaskType.FEATURE_ISSUE) {
      return "Feature";
    }
    return "Hotfix";
  }

  return { isSubmitted, onSubmitForm, data };
}

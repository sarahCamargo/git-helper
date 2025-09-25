import { useState } from "react";
import { CommitInfoProps } from "./types";
import { FormValues } from "./components/Form/form.types";

export function useHome() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = useState<CommitInfoProps>({} as CommitInfoProps);

  const onSubmitForm = (values: FormValues) => {
    setIsSubmitted(true);

    setData({
      commitMessage: `${values.featCode}`,
      featureBranch: "",
      taskBranch: "",
    } as CommitInfoProps);
  };

  return { isSubmitted, onSubmitForm, data };
}

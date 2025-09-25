import { FormikValues } from "formik";
import { useState } from "react";

export function useHome() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmitForm = (values: FormikValues) => {
    setIsSubmitted(true);
  };

  return { isSubmitted, onSubmitForm };
}

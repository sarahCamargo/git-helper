import { FormikValues, useFormik } from "formik";
import { FormInput } from "./types";

const INITIAL_VALUES = {
  taskType: null,
  featCode: null,
  usCode: null,
  usDescription: "",
};

export type FormProps = {
  onSubmitForm: (values: FormikValues) => void;
};

export function useForm({ onSubmitForm }: FormProps) {
  const { values, setFieldValue, handleSubmit } = useFormik<FormInput>({
    initialValues: INITIAL_VALUES,
    onSubmit: onSubmitForm,
  });

  return { values, setFieldValue, handleSubmit };
}

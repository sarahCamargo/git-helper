import { useFormik } from "formik";
import { FormValues, TaskType } from "./form.types";
import * as Yup from "yup";

const INITIAL_VALUES: FormValues = {
  taskType: "",
  featCode: "",
  usCode: "",
  usDescription: "",
};

const validationSchema = Yup.object({
  taskType: Yup.string().required("Selecione o tipo da task"),
  featCode: Yup.number()
    .typeError("Código da feature deve ser um número")
    .when("taskType", {
      is: TaskType.HOTFIX_BUG,
      then: (schema) => schema.required("Informe o código da feature"),
      otherwise: (schema) => schema.notRequired(),
    }),
  usCode: Yup.number()
    .typeError("Código da US deve ser um número")
    .required("Informe o código da US"),
  usDescription: Yup.string().trim().required("Informe a descrição da US"),
});

export type FormProps = {
  onSubmitForm: (values: FormValues) => void;
  onResetForm: () => void;
};

export function useForm({ onSubmitForm, onResetForm }: FormProps) {
  const formik = useFormik<FormValues>({
    initialValues: INITIAL_VALUES,
    onSubmit: onSubmitForm,
    onReset: onResetForm,
    validationSchema,
  });

  return {
    handleSubmit: formik.handleSubmit,
    getFieldProps: formik.getFieldProps,
    errors: formik.errors,
    touched: formik.touched,
    values: formik.values,
    handleReset: formik.resetForm,
  };
}

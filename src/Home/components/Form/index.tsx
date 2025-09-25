import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { FormProps, useForm } from "./useForm";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormHelperText,
} from "@mui/material";
import { TaskType } from "./form.types";

export default function Form({ onSubmitForm }: FormProps) {
  const { handleSubmit, getFieldProps, errors, touched, values } = useForm({
    onSubmitForm,
  });

  return (
    <Card sx={{ width: 800, minWidth: 300 }}>
      <CardHeader title="Git Helper" />
      <CardContent>
        <Grid
          container
          spacing={2}
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Grid item xs={12}>
            <FormControl
              fullWidth
              error={touched.taskType && Boolean(errors.taskType)}
            >
              <InputLabel id="form-select-task-type-label">
                Tipo Task
              </InputLabel>
              <Select
                labelId="form-select-task-type-label"
                id="form-select-task-type"
                {...getFieldProps("taskType")}
                required
              >
                <MenuItem value={TaskType.FEATURE_ISSUE}>
                  Feature/Issue
                </MenuItem>
                <MenuItem value={TaskType.HOTFIX_BUG}>Hotfix (BUG)</MenuItem>
                <MenuItem value={TaskType.HOTFIX_FEATURE}>
                  Hotfix (FEATURE)
                </MenuItem>
              </Select>
              {touched.taskType && errors.taskType && (
                <FormHelperText>{errors.taskType}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Código US"
              type="number"
              fullWidth
              {...getFieldProps("usCode")}
              error={touched.usCode && Boolean(errors.usCode)}
              helperText={touched.usCode && errors.usCode}
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Código Feature"
              type="number"
              fullWidth
              {...getFieldProps("featCode")}
              error={touched.featCode && Boolean(errors.featCode)}
              helperText={touched.featCode && errors.featCode}
              required={values?.taskType !== TaskType.HOTFIX_BUG}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Descrição US"
              fullWidth
              {...getFieldProps("usDescription")}
              error={touched.usDescription && Boolean(errors.usDescription)}
              helperText={touched.usDescription && errors.usDescription}
              required
            />
          </Grid>

          <Grid item xs={12} container justifyContent="flex-end">
            <Button type="submit" variant="contained">
              Enviar
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

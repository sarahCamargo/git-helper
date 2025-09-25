import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { FormProps, useForm } from "./useForm";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { TaskType } from "./types";

export default function Form({ onSubmitForm }: FormProps) {
  const { values, setFieldValue, handleSubmit } = useForm({ onSubmitForm });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="form-select-task-type-label">Tipo Task</InputLabel>
          <Select
            id={"form-select-task-type"}
            value={values.taskType}
            label="Tipo Task"
            onChange={(e) =>
              setFieldValue("taskType", e.target.value as TaskType)
            }
          >
            <MenuItem value={TaskType.FEATURE_ISSUE}>Feature/Issue</MenuItem>
            <MenuItem value={TaskType.HOTFIX_BUG}>Hotfix (BUG)</MenuItem>
            <MenuItem value={TaskType.HOTFIX_FEATURE}>
              Hotfix (FEATURE)
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Código US"
          value={values?.usCode}
          fullWidth
          type="number"
          onChange={(e) => setFieldValue("usCode", e.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Código Feature"
          value={values?.featCode}
          fullWidth
          type="number"
          onChange={(e) => setFieldValue("featCode", e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Descrição US"
          value={values?.usDescription}
          onChange={(e) => setFieldValue("usDescription", e.target.value)}
          fullWidth
          type="text"
        />
      </Grid>
      <Grid container item justifyContent={"flex-end"}>
        <Grid item>
          <Button variant="contained" onClick={() => handleSubmit()}>
            Enviar
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

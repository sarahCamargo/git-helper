import { Box, Grid } from "@mui/material";
import Form from "./components/Form";
import { useHome } from "./useHome";
import { ResultList } from "./components/ResultList";

export default function Home() {
  const { isSubmitted, onSubmitForm, data, onResetForm } = useHome();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        overflowX: "auto",
        padding: 2,
      }}
    >
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Form onSubmitForm={onSubmitForm} onResetForm={onResetForm} />
        </Grid>
        {isSubmitted && (
          <Grid item xs={12}>
            <ResultList data={data} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

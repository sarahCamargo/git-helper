import { Box, Card, CardContent, CardHeader, Grid } from "@mui/material";
import Form from "./components/Form";
import { useHome } from "./useHome";
import { ResultList } from "./components/ResultList";

export default function Home() {
  const { isSubmitted, onSubmitForm, data } = useHome();

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
          <Form onSubmitForm={onSubmitForm} />
        </Grid>
        {isSubmitted && (
          <Grid item>
            <ResultList data={data} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

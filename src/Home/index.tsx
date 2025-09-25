import { Box, Card, CardContent, CardHeader } from "@mui/material";
import Form from "../../components/Form/Form";
import { useHome } from "../../hooks/useHome";
import { ResultList } from "../../components/ResultList";

export default function Home() {
  const { isSubmitted, onSubmitForm } = useHome();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Card sx={{ minWidth: 300, m: 2 }}>
        <CardHeader />
        <CardContent>
          <Form onSubmitForm={onSubmitForm} />
          {isSubmitted && (
            <ResultList commitMessage={""} featureBranch={""} taskBranch={""} />
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

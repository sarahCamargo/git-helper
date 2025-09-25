import { Card, CardContent, Typography, Divider, Stack } from "@mui/material";
import { CommitInfoProps } from "../../types";

type ResultListProps = {
  data: CommitInfoProps;
};

export function ResultList({ data }: ResultListProps) {
  return (
    <Card
      sx={{
        width: 800,
        minWidth: 300,
      }}
    >
      <CardContent>
        <Stack spacing={2}>
          <div>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              color="text.secondary"
              gutterBottom
            >
              Mensagem de Commit
            </Typography>
            <Typography variant="body1" color="text.primary">
              {data.commitMessage}
            </Typography>
          </div>

          <Divider />

          <div>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              color="text.secondary"
              gutterBottom
            >
              Feature Branch
            </Typography>
            <Typography variant="body1" color="text.primary">
              {data.featureBranch}
            </Typography>
          </div>

          <Divider />

          <div>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              color="text.secondary"
              gutterBottom
            >
              Task Branch
            </Typography>
            <Typography variant="body1" color="text.primary">
              {data.taskBranch}
            </Typography>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}

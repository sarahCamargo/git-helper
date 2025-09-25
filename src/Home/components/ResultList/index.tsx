import { Card, CardContent, Typography } from "@mui/material";

type CommitInfoProps = {
  commitMessage: string;
  featureBranch: string;
  taskBranch: string;
};

export function ResultList({
  commitMessage,
  featureBranch,
  taskBranch,
}: CommitInfoProps) {
  return (
    <Card sx={{ maxWidth: 500, m: 2 }}>
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Mensagem Commit
        </Typography>
        <Typography variant="body1" gutterBottom>
          {commitMessage}
        </Typography>

        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Feature Branch
        </Typography>
        <Typography variant="body1" gutterBottom>
          {featureBranch}
        </Typography>

        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Task Branch
        </Typography>
        <Typography variant="body1">{taskBranch}</Typography>
      </CardContent>
    </Card>
  );
}

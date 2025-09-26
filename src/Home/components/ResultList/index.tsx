import {
  Card,
  CardContent,
  Typography,
  Divider,
  Stack,
  IconButton,
  Box,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
import { CommitInfoProps } from "../../types";

type ResultListProps = {
  data: CommitInfoProps;
};

export function ResultList({ data }: ResultListProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (field: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 1500);
  };

  const renderLine = (field: string, label: string, value: string) => (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box>
        <Typography
          variant="subtitle2"
          fontWeight="bold"
          color="text.secondary"
          gutterBottom
        >
          {label}
        </Typography>
        <Typography variant="body1" color="text.primary">
          {value}
        </Typography>
      </Box>
      <IconButton size="small" onClick={() => copyToClipboard(field, value)}>
        {copiedField === field ? (
          <CheckIcon fontSize="small" />
        ) : (
          <ContentCopyIcon fontSize="small" />
        )}
      </IconButton>
    </Box>
  );

  return (
    <Card sx={{ width: 800, minWidth: 300 }}>
      <CardContent>
        <Stack spacing={2}>
          {renderLine(
            "commitMessage",
            "Mensagem de Commit",
            data.commitMessage
          )}
          <Divider />
          {renderLine("featureBranch", "Feature Branch", data.featureBranch)}
          <Divider />
          {renderLine("taskBranch", "Task Branch", data.taskBranch)}
        </Stack>
      </CardContent>
    </Card>
  );
}

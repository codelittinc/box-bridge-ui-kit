import React from "react";
import { Box } from "@mui/material";

export type EmptyContentProps = {
  message: string;
  isVisible: boolean;
  style?: React.CSSProperties;
};

function EmptyContent({
  message,
  isVisible,
  style,
}: EmptyContentProps): React.ReactElement | null {
  if (!isVisible) return null;

  return (
    <Box
      sx={{
        textAlign: "center",
        fontSize: "21px",
        fontWeight: "bolder",
        border: `1px dashed var(--gray-1)`,
        padding: "20px",
        borderRadius: "5px",
        backgroundColor: "var(--gray-2)",
        ...(style || {}),
      }}
    >
      {message}
    </Box>
  );
}

export default EmptyContent;

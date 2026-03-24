import React from "react";
import { Box, Stack } from "@mui/material";
import styles from "./styles.module.css";

export default function LoadingContent() {
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{ maxWidth: "100%", width: "100%" }}
    >
      {[...Array(5)].map((_, index) => (
        <Box
          key={index}
          className={styles.skeleton}
          sx={{
            height: "24px",
            bgcolor: "grey.300",
            borderRadius: 1,
          }}
        />
      ))}
    </Stack>
  );
}

import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Stack, Typography } from "@mui/material";
import styles from "./styles.module.css";

export type AccordionProps = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

const Accordion = ({ title, children, defaultOpen = true }: AccordionProps) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <Box className={styles.accordionContainer}>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", alignItems: "center" }}
        className={styles.accordionHeader}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Typography variant="body2" sx={{ fontWeight: "medium" }}>
          {title}
        </Typography>
        <ExpandMoreIcon
          className={isOpen ? styles.chevronOpen : styles.chevronClosed}
          fontSize="small"
        />
      </Stack>
      {isOpen && <Box className={styles.accordionContent}>{children}</Box>}
    </Box>
  );
};

export default Accordion;

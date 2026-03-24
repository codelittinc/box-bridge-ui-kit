import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";

export type BreadcrumbItem = {
  id: string | undefined;
  name: string;
};

export type BreadcrumbProps = {
  breadcrumbs: BreadcrumbItem[];
  onBreadcrumbClick: (id: string | undefined, index: number) => void;
};

const Breadcrumb = ({ breadcrumbs, onBreadcrumbClick }: BreadcrumbProps) => {
  return (
    <Box className={styles["breadcrumb"]}>
      {breadcrumbs.map((crumb, index) => (
        <Box
          onClick={
            index < breadcrumbs.length - 1
              ? () => onBreadcrumbClick(crumb.id, index)
              : undefined
          }
          key={crumb.id ? `${crumb.name}-${crumb.id}` : `crumb-${index}`}
          className={styles["breadcrumb-item"]}
        >
          <Typography variant="body2">{crumb.name}</Typography>
          <Box>
            {index < breadcrumbs.length - 1 && (
              <Typography variant="body2">/</Typography>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Breadcrumb;

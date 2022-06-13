import * as React from "react";
import { Typography, Box } from "@mui/material";

export default function Header() {
  return (
    <Box
      component="header"
      sx={{ background: "#FF642D", py: 4, textAlign: "center" }}
    >
      <Typography variant="h1" align="center" sx={{ color: "#fff" }}>
        Semrush Demo
      </Typography>
    </Box>
  );
}

import * as React from "react";
import { Typography, Box } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ background: "#FF642D", py: 4 }}>
      <Typography align="center" sx={{ color: "#fff" }}>
        © Alyssa Butler
      </Typography>
    </Box>
  );
}

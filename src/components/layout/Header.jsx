import * as React from "react";
import { Typography, Box, Container } from "@mui/material";

export default function Header() {
  return (
    <Box component="header" sx={{ background: "#FF642D", py: 4 }}>
      <Container>
        <Typography
          variant="h1"
          sx={{ color: "#fff", fontSize: 24, fontWeight: 700 }}
        >
          Semrush Demo
        </Typography>
      </Container>
    </Box>
  );
}

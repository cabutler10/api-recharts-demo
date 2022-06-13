import * as React from "react";
import { Typography, Box } from "@mui/material";

export default function Legend() {
  const data = [
    { label: "Winners", color: "#58D68D" },
    { label: "Losers", color: "#EC7063" },
  ];
  return (
    <div>
      {data.map((elem, idx) => (
        <Box
          key={elem.label}
          sx={{
            display: "flex",
            pb: idx !== data.length - 1 ? 1 : 0,
            alignItems: "center",
          }}
        >
          <Box sx={{ height: 10, width: 10, background: elem.color, mr: 1 }} />
          <Typography>{elem.label}</Typography>
        </Box>
      ))}
    </div>
  );
}

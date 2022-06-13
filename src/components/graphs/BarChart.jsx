import * as React from "react";
import {
  BarChart as ReBarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { Box } from "@mui/material";

function CustomizedAxisTick({ x, y, payload }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-60)"
      >
        {payload.value}
      </text>
    </g>
  );
}

export default function BarChart({ data }) {
  return (
    <Box
      sx={{
        width: 1000,
        height: 600,
        overflowX: "scroll",
        overflowY: "hidden",
      }}
      data-testid="barChart"
    >
      <ResponsiveContainer width="100%" height="100%">
        <ReBarChart width={150} height={40} data={data}>
          <XAxis
            dataKey="literal"
            tick={<CustomizedAxisTick />}
            height={200}
            interval={0}
          />
          <YAxis
            width={100}
            label={{
              value: "Search Volume",
              angle: -90,
              position: "insideLeft",
              fill: " #666",
            }}
          />
          <Bar dataKey="searchVolume">
            {data?.map((elem) => (
              <Cell
                key={`cell-${elem.literal}`}
                fill={
                  elem.trend === "winner"
                    ? "#58D68D"
                    : elem.trend === "loser"
                    ? "#EC7063"
                    : "#d3d3d3"
                }
              />
            ))}
          </Bar>
        </ReBarChart>
      </ResponsiveContainer>
    </Box>
  );
}

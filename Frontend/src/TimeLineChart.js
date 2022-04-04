import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "5 AM",
    uv: 3490,
  },
  {
    name: "6 AM",
    uv: 4000,
  },
  {
    name: "7 AM",
    uv: 3000,
  },
  {
    name: "8 AM",
    uv: 2000,
  },
  {
    name: "9 AM",
    uv: 2780,
  },
  {
    name: "10 AM",
    uv: 1890,
  },
  {
    name: "11 AM",
    uv: 2390,
  },
  {
    name: "12 PM",
    uv: 3490,
  },
  {
    name: "1 PM",
    uv: 3490,
  },
  {
    name: "2 PM",
    uv: 5650,
  },
  {
    name: "3 PM",
    uv: 2990,
  },
  {
    name: "4 PM",
    uv: 3492,
  },
  {
    name: "5 PM",
    uv: 6412,
  },
  {
    name: "6 PM",
    uv: 8412,
  },
  {
    name: "7 PM",
    uv: 2412,
  },
  {
    name: "8 PM",
    uv: 7412,
  },
  {
    name: "9 PM",
    uv: 2412,
  },
  {
    name: "10 PM",
    uv: 3412,
  },
  {
    name: "11 PM",
    uv: 8412,
  },
  {
    name: "12 AM",
    uv: 4490,
  },
  {
    name: "1 AM",
    uv: 5590,
  },
  {
    name: "2 AM",
    uv: 1290,
  },
  {
    name: "3 AM",
    uv: 990,
  },
  {
    name: "4 AM",
    uv: 1490,
  },
];

export default function TimeLineChart() {
  return (
    <ResponsiveContainer width="95%" height="95%">
      <AreaChart width={150} height={40} data={data}>
        <Tooltip />
        <XAxis
          dataKey="name"
          ticks={["6 AM", "10 AM", "2 PM", "6 PM", "10 PM", "2 AM"]}
        />
        <Area type="monotone" dataKey="uv" stroke="#ED7D31" fill="#004753" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

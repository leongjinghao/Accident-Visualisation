import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import stateData from "./data.json";

export default function CountBarChart() {
  return (
    <ResponsiveContainer width="100%" height="90%">
      <BarChart
        width={500}
        height={300}
        data={stateData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="State" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="Freq" fill="#004753" />
      </BarChart>
    </ResponsiveContainer>
  );
}

import React, { useState, useEffect } from "react";
import { PieChart, Pie, Label, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#004753", "#bdbdbd"];

const CustomLabel = ({ viewBox, type, data }) => {
  const { cx, cy } = viewBox;
  var xvalue = 20;
  var xtext = 30;

  if (type === "Temperature") {
    xvalue = 35;
    xtext = 45;
  } else if (type === "Pressure") {
    xvalue = 48;
  } else if (type === "Precipitation") {
    xvalue = 5;
    xtext = 43;
  }

  return (
    <React.Fragment>
      <text x={cx - xvalue} y={cy}>
        <tspan
          style={{
            fill: "#004753",
            fontWeight: "bolder",
            fontSize: "30px",
            fontFamily: "Roboto",
          }}
        >
          {data
            ? type === "Temperature"
              ? `${data}F`
              : type === "Pressure"
              ? `${data}in`
              : `${data}%`
            : "-"}
        </tspan>
      </text>
      <text x={cx - xtext} y={cy + 25}>
        <tspan
          style={{
            fontFamily: "Roboto",
          }}
        >
          {type}
        </tspan>
      </text>
    </React.Fragment>
  );
};

export default function DonutChart({ type, data }) {
  const [pieData, setPieData] = useState([]);

  useEffect(() => {
    setPieData([
      { name: "Group A", value: data },
      { name: "Group B", value: 100 - data },
    ]);
  }, [data]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "13vw",
        height: "24vh",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={pieData}
            innerRadius={60}
            outerRadius={85}
            startAngle={90}
            endAngle={450}
            fill="#8884d8"
            paddingAngle={2}
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <Label
              content={<CustomLabel type={type} data={data} />}
              position="center"
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

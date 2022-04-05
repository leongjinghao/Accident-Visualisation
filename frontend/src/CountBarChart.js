import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function CountBarChart(props) {
  const [data, setData] = useState([]);
  const [barKey, setBarKey] = useState();

  async function getData() {
    var url = "";
    if (props.state == "none") {
      url = "https://localhost:5001/states";
      setBarKey("state");
    } else {
      url = `https://localhost:5001/County/${props.state}`;
      setBarKey("county");
    }
    const info = await axios.get(url).then((res) => {
      return res.data;
    });
    setData(info);
  }

  useEffect(() => {
    getData();
  }, [props.state]);

  return (
    <ResponsiveContainer width="100%" height="90%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey={barKey} />
        <YAxis />
        <Tooltip />
        <Bar dataKey="freq" fill="#004753" />
      </BarChart>
    </ResponsiveContainer>
  );
}

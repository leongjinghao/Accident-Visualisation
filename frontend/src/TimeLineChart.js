import React, { useState, useEffect } from "react";
import axios from "axios";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function TimeLineChart() {
  const [dataa, setData] = useState([]);
  async function getData() {
    var index = [];
    var temp = [];
    const info = await axios
      .get("https://localhost:5001/Accident/StartHourCount")
      .then((res) => {
        return res.data;
      });
    info.map((item) => {
      index.push(item.hour);
    });
    for (var i = 0; i < 24; i++) temp[index[i]] = info[i];
    var newArr = temp.map(function (arr) {
      if (arr.hour == 0) {
        arr.time = "12 AM";
      } else if (arr.hour < 12) {
        arr.time = arr.hour + " AM";
      } else if (arr.hour == 12) {
        arr.time = arr.hour + " PM";
      } else {
        arr.time = arr.hour - 12 + " PM";
      }
      delete arr.hour;
      return arr;
    });
    setData(newArr);

    console.log(newArr);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <ResponsiveContainer width="95%" height="95%">
      <AreaChart width={150} height={40} data={dataa}>
        <Tooltip />
        <XAxis
          dataKey="time"
          ticks={["2 AM", "6 AM", "10 AM", "2 PM", "6 PM", "10 PM"]}
        />
        <Area type="monotone" dataKey="count" stroke="#ED7D31" fill="#004753" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

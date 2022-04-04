import React, { useState, useEffect } from "react";
import axios from "axios";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { format, parseISO } from "date-fns";

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

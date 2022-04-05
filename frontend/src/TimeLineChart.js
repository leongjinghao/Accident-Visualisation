import React, { useState, useEffect } from "react";
import axios from "axios";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function TimeLineChart({ state }) {
  const [data, setData] = useState([]);
  const [ticks, setTicks] = useState([]);
  async function getData() {
    var index = [];
    var temp = [];
    var tickArray = [];
    var url = "https://localhost:5001/Accident/StartHourCount";
    if (state != "none") url = `https://localhost:5001/timeFrequency/${state}`;
    const info = await axios.get(url).then((res) => {
      return res.data;
    });
    if (state != "none") {
      info.sort((a, b) => a.start_time - b.start_time);

      var newArr = info.map(function (arr) {
        if (state != "none") arr.start_time = Number(arr.start_time);
        if (arr.start_time == 0) {
          arr.time = "12 AM";
        } else if (arr.start_time < 12) {
          arr.time = arr.start_time + " AM";
        } else if (arr.start_time == 12) {
          arr.time = arr.start_time + " PM";
        } else {
          arr.time = arr.start_time - 12 + " PM";
        }
        arr.count = arr.freq;
        delete arr.freq;
        delete arr.start_time;
        return arr;
      });
    } else {
      info.map((item) => {
        index.push(item.hour);
      });
      for (var i = 0; i < 24; i++) temp[index[i]] = info[i];
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
    }
    setData(newArr);
    newArr.map((item) => {
      if (
        [
          "12 AM",
          "2 AM",
          "4 AM",
          "6 AM",
          "8 AM",
          "10 AM",
          "12 PM",
          "2 PM",
          "4 PM",
          "6 PM",
          "8 PM",
          "10 PM",
        ].includes(item.time)
      ) {
        tickArray.push(item.time);
      }
    });
    setTicks(tickArray);
  }

  useEffect(() => {
    getData();
  }, [state]);
  return (
    <ResponsiveContainer width="95%" height="95%">
      <AreaChart width={150} height={40} data={data}>
        <Tooltip />
        <XAxis dataKey="time" ticks={ticks} />
        <Area type="monotone" dataKey="count" stroke="#ED7D31" fill="#004753" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

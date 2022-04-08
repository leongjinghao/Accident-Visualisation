import { Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SeverityScale from "../Components/SeverityScale";
import City from "../Components/City";
import Time from "../Components/Time";
import Street from "../Components/Street";

export default function AccidentDetails({ accident, state }) {
  const [data, setData] = useState([]);
  const [time, setTime] = useState([]);
  async function getData() {
    var url = `https://localhost:5001/Accident/${accident}`;
    const info = await axios.get(url).then((res) => {
      return res.data;
    });
    setData(info[0]);
    setTime([new Date(info[0].start_time), new Date(info[0].end_time)]);
    console.log(info[0]);
  }

  useEffect(() => {
    getData();
  }, [accident]);
  return (
    <Paper
      elevation={5}
      style={{
        width: "33vw",
        height: "45vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fffaf7",
        paddingLeft: "1vw",
        paddingRight: "1vw",
      }}
    >
      <SeverityScale data={data.severity} />
      <City data={[state, data.county, data.city]} />
      <Street data={[data.street, data.side]} />
      <Time data={time} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span className="textDetails">Description:</span>{" "}
        <span
          style={{
            color: "#004753",
          }}
        >
          {data.description}
        </span>
      </div>
    </Paper>
  );
}

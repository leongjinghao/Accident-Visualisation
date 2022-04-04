import { Paper } from "@mui/material";
import React from "react";
import SeverityScale from "./Accident_Props/SeverityScale";
import City from "./Accident_Props/City";
import Time from "./Accident_Props/Time";
import Street from "./Accident_Props/Street";
import { info } from "./all";

export default function AccidentDetails() {
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
      <SeverityScale />
      <City />
      <Street />
      <Time />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span className="textDetails">Description:</span>{" "}
        <span
          style={{
            color: "#004753",
          }}
        >
          {info[0].Description}
        </span>
      </div>
    </Paper>
  );
}

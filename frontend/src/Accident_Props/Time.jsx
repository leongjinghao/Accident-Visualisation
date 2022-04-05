import React, { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import { format } from "date-fns";
import "../style.css";

export default function Time({ data }) {
  if (data != "") {
    var comp = true;
  } else {
    var comp = null;
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span className="textDetails">Date:</span>
      <span
        style={{
          color: "#004753",
          fontWeight: "bolder",
          fontSize: "22px",
        }}
      >
        {comp && format(data[0], "dd/MM/yyyy")}
      </span>
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "10px",
          }}
        >
          <span className="textDetails">Start Time:</span>{" "}
          <span
            style={{
              color: "#004753",
              fontWeight: "bolder",
              fontSize: "22px",
            }}
          >
            {comp && format(data[0], "HHmm")}
            {" Hrs"}
          </span>
        </div>
        <Slider
          value={comp && [format(data[0], "H"), format(data[1], "H")]}
          disabled
          min={0}
          max={24}
          style={{ color: "#004753", width: "37%" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "10px",
          }}
        >
          <span className="textDetails">End Time:</span>{" "}
          <span
            style={{
              color: "#004753",
              fontWeight: "bolder",
              fontSize: "22px",
            }}
          >
            {comp && format(data[1], "HHmm")}
            {" Hrs"}
          </span>
        </div>
      </div>
    </div>
  );
}

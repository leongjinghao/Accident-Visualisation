import React from "react";
import { info } from "../all";
import Slider from "@mui/material/Slider";
import { format, parseISO } from "date-fns";
import "../style.css";
const date = new Date(info[0].Start_Time);

export default function Time() {
  const [value, setValue] = React.useState([2, 7]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span className="textDetails">Date:</span>{" "}
      <span
        style={{
          color: "#004753",
          fontWeight: "bolder",
          fontSize: "22px",
        }}
      >
        {format(new Date(info[0].Start_Time), "dd/MM/yyyy")}
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
            {format(new Date(info[0].Start_Time), "HHmm")}
            {" Hrs"}
          </span>
        </div>
        <Slider
          value={value}
          onChange={handleChange}
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
            {format(new Date(info[0].End_Time), "HHmm")}
            {" Hrs"}
          </span>
        </div>
      </div>
    </div>
  );
}

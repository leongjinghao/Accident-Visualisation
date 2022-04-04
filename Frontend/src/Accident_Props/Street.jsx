import React from "react";
import { info } from "../all";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "../style.css";
export default function Street() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <span className="textDetails">Street:</span>{" "}
      <div style={{ display: "flex", alignItems: "center" }}>
        <ArrowLeftIcon
          fontSize="large"
          style={{ color: info[0].Side === "L" ? "#004753" : "#d3d3d3" }}
        />

        <span
          style={{
            color: "#004753",
            fontWeight: "bolder",
            fontSize: "22px",
          }}
        >
          {info[0].Street}
        </span>
        <ArrowRightIcon
          fontSize="large"
          style={{ color: info[0].Side === "R" ? "#004753" : "#d3d3d3" }}
        />
      </div>
    </div>
  );
}

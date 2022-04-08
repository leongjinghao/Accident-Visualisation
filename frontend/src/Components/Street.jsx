import React from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "../style.css";
export default function Street({ data }) {
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
          style={{ color: data[1] === "L" ? "#004753" : "#d3d3d3" }}
        />

        <span
          style={{
            color: "#004753",
            fontWeight: "bolder",
            fontSize: "22px",
          }}
        >
          {data[0]}
        </span>
        <ArrowRightIcon
          fontSize="large"
          style={{ color: data[1] === "R" ? "#004753" : "#d3d3d3" }}
        />
      </div>
    </div>
  );
}

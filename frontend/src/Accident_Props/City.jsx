import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { info } from "../all";
import "../style.css";
export default function City({ data }) {
  const breadcrumbs = [
    <span
      style={{
        fontSize: "22px",
      }}
      key="1"
      color="inherit"
    >
      {data[0]}
    </span>,
    <span
      style={{
        fontSize: "22px",
      }}
      key="2"
      color="inherit"
    >
      {data[1]}
    </span>,
    <span
      style={{
        color: "#004753",
        fontWeight: "bolder",
        fontSize: "22px",
      }}
      key="3"
    >
      {data[2]}
    </span>,
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span className="textDetails">City:</span>{" "}
      <Breadcrumbs separator={<NavigateNextIcon fontSize="large" />}>
        {breadcrumbs}
      </Breadcrumbs>
    </div>
  );
}

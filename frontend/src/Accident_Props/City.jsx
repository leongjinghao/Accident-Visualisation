import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { info } from "../all";
import "../style.css";
export default function City() {
  const breadcrumbs = [
    <span
      style={{
        fontSize: "22px",
      }}
      key="1"
      color="inherit"
    >
      {info[0].State}
    </span>,
    <span
      style={{
        fontSize: "22px",
      }}
      key="2"
      color="inherit"
    >
      {info[0].County}
    </span>,
    <span
      style={{
        color: "#004753",
        fontWeight: "bolder",
        fontSize: "22px",
      }}
      key="3"
    >
      {info[0].City}
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

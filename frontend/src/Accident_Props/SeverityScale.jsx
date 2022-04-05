import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "../style.css";

const badge = ["ONE", "TWO", "THREE", "FOUR"];

export default function SeverityScale({ data }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span className="textDetails">Severity:</span>
      {console.log(data)}
      <ButtonGroup>
        {badge.map((entry, index) => (
          <Button
            disabled
            style={{
              backgroundColor: index + 1 === data ? "#004753" : "lightgray",
              borderColor: "#9cbbc1",
              color: index + 1 === data ? "white" : "",
            }}
          >
            {entry}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}

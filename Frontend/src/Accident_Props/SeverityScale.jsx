import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "../style.css";

const number = 3;
const badge = ["ONE", "TWO", "THREE", "FOUR"];

export default function SeverityScale() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span className="textDetails">Severity:</span>
      <ButtonGroup>
        {badge.map((entry, index) => (
          <Button
            disabled
            style={{
              backgroundColor: index + 1 === number ? "#004753" : "lightgray",
              borderColor: "#9cbbc1",
              color: index + 1 === number ? "white" : "",
            }}
          >
            {entry}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}

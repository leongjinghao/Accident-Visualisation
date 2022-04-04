import React from "react";
import { Paper } from "@mui/material";
import AirIcon from "@mui/icons-material/Air";
import DonutChart from "./Location_Props/DonutChart";
import { info } from "./all";
import "./style.css";
import ExploreIcon from "@mui/icons-material/Explore";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ColorChips from "./BooleanProperties";

//Data needed
//From Weather Table: Humidity, Temperature, Pressure, Precipitation, Wind Chill, Wind Speed, Wind Direction, Visibility
//From Location_Property Table: All the boolean data.

export default function LocationDetails() {
  return (
    <Paper
      elevation={5}
      style={{
        width: "84.5vw",
        height: "48vh",
        display: "flex",
        backgroundColor: "#fffaf7",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <DonutChart data={info[0].Humidity} type="Humidity" />
            <DonutChart data={info[0].Temperature} type="Temperature" />
            <div className="box2">
              <AirIcon style={{ fontSize: 50 }} />
              Wind Speed
              <span className="textStyle">58</span>
            </div>
            <div className="box2" style={{ marginLeft: "3vw" }}>
              <ExploreIcon style={{ fontSize: 50 }} />
              Wind Direction
              <span className="textStyle">SW</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <DonutChart data={info[0].Pressure} type="Pressure" />
            <DonutChart data={info[0].Precipitation} type="Precipitation" />
            <div className="box2">
              <VisibilityIcon style={{ fontSize: 50 }} />
              Visibility
              <span className="textStyle">10</span>
            </div>
            <div className="box2" style={{ marginLeft: "3vw" }}>
              <AcUnitIcon style={{ fontSize: 50 }} />
              Wind Chill
              <span className="textStyle">SW</span>
            </div>
          </div>
        </div>
        <div style={{ marginRight: "2vw" }}>
          <ColorChips />
        </div>
      </div>
    </Paper>
  );
}

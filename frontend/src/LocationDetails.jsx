import React, { useState, useEffect } from "react";
import axios from "axios";
import { Paper } from "@mui/material";
import AirIcon from "@mui/icons-material/Air";
import DonutChart from "./Location_Props/DonutChart";
import "./style.css";
import ExploreIcon from "@mui/icons-material/Explore";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ColorChips from "./BooleanProperties";

//Data needed
//From Weather Table: Humidity, Temperature, Pressure, Precipitation, Wind Chill, Wind Speed, Wind Direction, Visibility
//From Location_Property Table: All the boolean data.

export default function LocationDetails({ accident }) {
  const [data, setData] = useState([]);
  async function getData() {
    var url = `https://localhost:5001/Accident/${accident}`;
    const info = await axios.get(url).then((res) => {
      return res.data;
    });
    setData(info[0]);
    console.log(info[0]);
  }

  useEffect(() => {
    getData();
  }, [accident]);
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
            <DonutChart data={data.humidity} type="Humidity" />
            <DonutChart data={data.temperature} type="Temperature" />
            <div className="box2">
              <AirIcon style={{ fontSize: 50 }} />
              Wind Speed
              <span className="textStyle">
                {data.wind_speed}
                {"km/h"}
              </span>
            </div>
            <div className="box2" style={{ marginLeft: "3vw" }}>
              <ExploreIcon style={{ fontSize: 50 }} />
              Wind Direction
              <span className="textStyle">{data.wind_direction}</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <DonutChart data={data.pressure} type="Pressure" />
            <DonutChart data={data.precipitation} type="Precipitation" />
            <div className="box2">
              <VisibilityIcon style={{ fontSize: 50 }} />
              Visibility
              <span className="textStyle">{data.visibility}</span>
            </div>
            <div className="box2" style={{ marginLeft: "3vw" }}>
              <AcUnitIcon style={{ fontSize: 50 }} />
              Wind Chill
              <span className="textStyle">
                {data.wind_chill}
                {"F"}
              </span>
            </div>
          </div>
        </div>
        <div style={{ marginRight: "2vw" }}>
          <ColorChips data={data} />
        </div>
      </div>
    </Paper>
  );
}

import React, { useState, useEffect } from "react";
import USAMap from "react-usa-map";
import stateData from "./data.json";

export default function StateMap(props) {
  const [data, setData] = useState([]);

  const mapHandler = (event) => {
    props.changeState(event.target.dataset.name);
  };

  function color(number) {
    if (number < 50) {
      return "#D9BF4E";
    } else if (number < 300) {
      return "#CCAA14";
    } else if (number < 1000) {
      return "#DD9423";
    } else if (number < 5000) {
      return "#e18f27";
    }
    return "#ED7D31";
  }
  function makeStatsConfig() {
    const config = {};
    stateData.map((item) => {
      config[item.State] = {};
      config[item.State].fill = color(item.Freq);
      //   console.log(config);
    });
    return config;
  }
  return (
    <div>
      <USAMap
        height="45vh"
        width="45vw"
        onClick={mapHandler}
        customize={makeStatsConfig()}
      />
    </div>
  );
}

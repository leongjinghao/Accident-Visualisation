import React, { useState, useEffect } from "react";
import USAMap from "react-usa-map";
import axios from "axios";

export default function StateMap(props) {
  const [data, setData] = useState([]);
  async function getData() {
    const info = await axios
      .get("https://localhost:5001/states")
      .then((res) => {
        return res.data;
      });
    setData(info);
  }

  useEffect(() => {
    getData();
  }, []);

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
    data.map((item) => {
      config[item.state] = {};
      config[item.state].fill = color(item.freq);
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

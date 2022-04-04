import React, { useState, useEffect } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  Circle,
} from "react-leaflet";
import { icon } from "leaflet";
import { info } from "./all";
import "./style.css";
import jsondata from "./loca.json";

const ICON = icon({
  iconUrl: "/marker.png",
  iconSize: [32, 32],
});

const CLICKED = icon({
  iconUrl: "/marker2.png",
  iconSize: [32, 32],
});

function Markers({ data, returnMarker }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const map = useMap();
  function getMarkerIcon(index) {
    if (index === selectedIndex) return CLICKED;
    return ICON;
  }
  return data.map((dat, index) => {
    return (
      <Marker
        icon={getMarkerIcon(index)}
        index={index}
        position={[dat.Start_Lat, dat.Start_Lng]}
        eventHandlers={{
          click: () => {
            map.setView([dat.Start_Lat, dat.Start_Lng], 14);
            setSelectedIndex(index);
            returnMarker(dat.ID);
          },
        }}
        which={dat.ID}
      >
        <Popup>Accident Radius: xx</Popup>
        {index == selectedIndex && (
          <Circle
            center={[dat.Start_Lat, dat.Start_Lng]}
            fillColor="blue"
            radius={200} //distance 1km=100
          />
        )}
      </Marker>
    );
  });
}

export default function StreetMap(props) {
  var arr = jsondata.find((data) => data.State === props.state);
  const [data, setData] = useState(jsondata);

  return (
    <MapContainer
      center={[arr.Start_Lat, arr.Start_Lng]}
      zoom={8}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers
        data={data.filter((fildata) => fildata.State === props.state)}
        returnMarker={(value) => props.viewMarker(value)}
      />
    </MapContainer>
  );
}

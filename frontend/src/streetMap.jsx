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
import "./style.css";
import axios from "axios";

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
        position={[dat.start_Lat, dat.start_Lng]}
        eventHandlers={{
          click: () => {
            map.setView([dat.start_Lat, dat.start_Lng], 14);
            setSelectedIndex(index);
            returnMarker(dat.id);
          },
        }}
        which={dat.id}
      >
        <Popup>Accident Radius: {dat.distance}km</Popup>
        {index == selectedIndex && (
          <Circle
            center={[dat.start_Lat, dat.start_Lng]}
            fillColor="blue"
            radius={dat.distance * 200} //distance 1km=100
          />
        )}
      </Marker>
    );
  });
}

export default function StreetMap(props) {
  // var arr = jsondata.find((data) => data.State === props.state);
  // const [data, setData] = useState(jsondata);
  const fetchUrl = `https://localhost:5001/AccidentLocation/${props.state}`;
  const [data, setData] = useState([]);
  const [center, setCenter] = useState([40, -80]);
  async function getData() {
    const info = await axios.get(fetchUrl).then((res) => {
      return res.data;
    });
    setData(info);
    setCenter([info[0].start_Lat, info[0].start_Lng]);
  }

  useEffect(() => {
    getData();
  }, []);
  function ChangeView({ center }) {
    const map = useMap();
    map.setView(center);
    return null;
  }
  return (
    <MapContainer center={center} zoom={8} scrollWheelZoom={true}>
      <ChangeView center={center} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers data={data} returnMarker={(value) => props.viewMarker(value)} />
    </MapContainer>
  );
}

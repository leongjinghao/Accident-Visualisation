import * as React from "react";
import { styled } from "@mui/system";
import { useSwitch } from "@mui/base/SwitchUnstyled";
import "./style.css";
import Tooltip from "@mui/material/Tooltip";

const info = [
  "Presence of Amenity in a nearby location",
  "Presence of speed Bump or Hump in a nearby location",
  "Presence of a Crossing in a nearby location",
  "Presence of a Traffic Signal in a nearby location",
  "Presence of a Junction in a nearby location",
  "Presence of a No Exit sign in a nearby location",
  "Presence of a Railway in a nearby location",
  "Presence of a Roundabout in a nearby location",
  "Presence of a Station in a nearby location",
  "Presence of a Give Way sign in a nearby location",
  "Presence of a Stop sign in a nearby location",
  "Presence of a Turning Loop in a nearby location",
];

const BasicSwitchRoot = styled("span")(
  ({ theme }) => `
  font-size: 0;
  position: relative;
  display: flex;
  align-items:center;
  width: 60px;
  height: 30px;
  margin-top: 10px;
  background: #BFC7CF;
  border-radius: 15px;
  cursor: inherit;

  &.Switch-checked {
    background: #004753;

  }
  `
);

const BasicSwitchThumb = styled("span")`
  display: block;
  width: 21px;
  height: 21px;
  left: 5px;
  border-radius: 16px;
  background-color: #fff;
  position: relative;

  &.Switch-checked {
    left: 33px;
  }
`;

function BasicSwitch(props) {
  const { checked } = useSwitch(props);

  return (
    <BasicSwitchRoot className={checked ? "Switch-checked" : ""}>
      <BasicSwitchThumb className={checked ? "Switch-checked" : ""} />
    </BasicSwitchRoot>
  );
}
export default function ColorChips({ data }) {
  return (
    <div className="propertyGrid">
      <div className="propertyRow">
        <Tooltip title={info[0]} followCursor>
          <div className="propertyBox">
            <span className="textStyle">Amenity</span>
            <BasicSwitch checked={data.amenity} />
          </div>
        </Tooltip>

        <Tooltip title={info[1]} followCursor>
          <div className="propertyBox">
            <span className="textStyle">Bump</span>
            <BasicSwitch checked={data.bump} />
          </div>
        </Tooltip>
        <Tooltip title={info[2]} followCursor>
          <div className="propertyBox">
            <span className="textStyle">Crossing</span>
            <BasicSwitch checked={data.crossing} />
          </div>
        </Tooltip>
        <Tooltip title={info[3]} followCursor>
          <div className="propertyBox">
            <span className="textStyle">Traffic Signal</span>
            <BasicSwitch checked={data.traffic_signal} />
          </div>
        </Tooltip>
      </div>
      <div className="propertyRow">
        <Tooltip title={info[4]} followCursor>
          <div className="propertyBox">
            <span className="textStyle">Junction</span>
            <BasicSwitch checked={data.junction} />
          </div>
        </Tooltip>
        <Tooltip title={info[5]} followCursor>
          <div className="propertyBox">
            <span className="textStyle">No Exit</span>
            <BasicSwitch checked={data.no_exit} />
          </div>
        </Tooltip>
        <Tooltip title={info[6]} followCursor>
          <div className="propertyBox">
            <span className="textStyle">Railway</span>
            <BasicSwitch checked={data.railway} />
          </div>
        </Tooltip>
        <Tooltip title={info[7]} followCursor>
          <div className="propertyBox">
            <span className="textStyle">Roundabout</span>
            <BasicSwitch checked={data.roundabout} />
          </div>
        </Tooltip>
      </div>
      <div className="propertyRow">
        <Tooltip title={info[8]} followCursor>
          <div className="propertyBox">
            <span className="textStyle">Station</span>
            <BasicSwitch checked={data.station} />
          </div>
        </Tooltip>
        <Tooltip title={info[9]} followCursor>
          <div className="propertyBox">
            <span className="textStyle">Give Way</span>
            <BasicSwitch checked={data.give_way} />
          </div>
        </Tooltip>
        <Tooltip title={info[10]} followCursor>
          <div className="propertyBox">
            <span className="textStyle">Stop</span>
            <BasicSwitch checked={data.stop} />
          </div>
        </Tooltip>
        <Tooltip title={info[11]} followCursor>
          <div className="propertyBox">
            <span className="textStyle">Turning loop</span>
            <BasicSwitch checked={data.turning_loop} />
          </div>
        </Tooltip>
      </div>
    </div>
  );
}

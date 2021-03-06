import { Button, Paper } from "@mui/material";
import React, { useState } from "react";
import StateMap from "./Views/StateMap";
import StreetMap from "./Views/streetMap";
import TimeLineChart from "./Charts/TimeLineChart";
import CountBarChart from "./Charts/CountBarChart";
import "@fontsource/roboto/400.css";
import AccidentDetails from "./Views/AccidentDetails";
import LocationDetails from "./Views/LocationDetails";
import AssessmentIcon from "@mui/icons-material/Assessment";
import HomeIcon from "@mui/icons-material/Home";
import ForumIcon from "@mui/icons-material/Forum";
import "./style.css";
import ReportForm from "./Components/ReportForm";
function App() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState("none");
  const [marker, setMarker] = useState("none");
  const resetEvents = () => {
    setState("none");
    setMarker("none");
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="pagewrapper">
      <div className="sidebar">
        <div className="sidebartop">
          <div className="pageTitle">
            <AssessmentIcon fontSize="large" />
            CSC2008
          </div>
          <div className="sidebarbutton">
            <Button onClick={resetEvents} sx={{ color: "#ed7d31" }}>
              <HomeIcon sx={{ marginRight: "10px" }} />
              Home
            </Button>
          </div>

          <ReportForm open={open} close={handleClose} accident={marker} />
          <div className="sidebarbutton">
            {marker != "none" && (
              <Button onClick={handleClickOpen} sx={{ color: "#ed7d31" }}>
                <ForumIcon sx={{ marginRight: "10px" }} />
                Provide Feedback
              </Button>
            )}
          </div>
        </div>
        <div className="sidebarbottom">
          <img src="./sitlogo.png" width={150} />
        </div>
      </div>
      <div className="dashboard">
        <div className="topwrapper">
          <div className="topLeft">
            <Paper
              elevation={5}
              style={{
                width: "48vw",
                height: "45vh",
                backgroundColor: "#fffaf7",
              }}
            >
              {state === "none" ? (
                <StateMap changeState={(value) => setState(value)} />
              ) : (
                <StreetMap
                  state={state}
                  viewMarker={(value) => setMarker(value)}
                />
              )}
            </Paper>
          </div>

          <div className="topRight">
            {marker === "none" ? (
              <Paper
                elevation={5}
                style={{
                  width: "35vw",
                  height: "45vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#fffaf7",
                }}
              >
                {marker === "none" ? <TimeLineChart state={state} /> : ""}
              </Paper>
            ) : (
              <AccidentDetails accident={marker} state={state} />
            )}
          </div>
        </div>
        <div className="bottomwrapper">
          {marker === "none" ? (
            <Paper
              elevation={5}
              style={{
                width: "84.5vw",
                height: "48vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fffaf7",
              }}
            >
              <CountBarChart state={state} />
            </Paper>
          ) : (
            <LocationDetails accident={marker} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

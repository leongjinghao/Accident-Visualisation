import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ReportForm(props) {
  return (
    <div>
      <Dialog open={props.open}>
        <DialogTitle>Provide Feedback</DialogTitle>
        <DialogContent>
          <DialogContentText>Accident ID: {props.accident}</DialogContentText>
          <DialogContentText>
            To provide feedback, please enter the form accordingly and
            accurately. We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Feedback"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close}>Cancel</Button>
          <Button>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

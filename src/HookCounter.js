/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import { MinusIcon, AddIcon } from "./Icons/SvgIcon";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

export default function HookCounter() {
  const [count, setCount] = useState(0);
  function Add() {
    if (count < 100) {
      setCount(count + 1);
    } else {
      alert("memory full");
      setCount(0);
    }
  }
  function Minus() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("memory leak");
      setCount(0);
    }
  }

  return (
    <div className="App">
      <h1 className="HCounter">Counter</h1>
      <br />

      <div className={useStyles.root}>
        <Grid container spacing={3}>
          <Grid item xs={2} style={{ marginLeft: 250 }}>
            <Paper>
              <button onClick={Add} className="Button-A">
                <AddIcon />
              </button>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className="Count">
              <h1>{count}</h1>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>
              <button className="Button-A">
                <MinusIcon />
              </button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

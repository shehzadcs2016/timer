/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import { MinusIcon, AddIcon } from "./Icons/SvgIcon";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

class Counter extends React.Component {
  state = { count: 0 };

  Add = () => {
    // alert("add");
    const { count } = this.state;
    if (count < 100) {
      this.setState({ count: count + 1 });
    } else {
      alert("memory full");
      this.setState({ count: 0 });
    }
    // console.log(count);
  };

  Minus = () => {
    // alert("add");
    const { count } = this.state;
    if (count > 0) {
      this.setState({ count: count - 1 });
    } else {
      alert("memory leak");
      this.setState({ count: 0 });
    }
    // console.log(count);
  };
  render() {
    const { count } = this.state;
    return (
      <div className="App">
        <h1 style={{ color: "dodgerblue", marginRight: 200 }}>Counter</h1>
        <br />

        <div className={useStyles.root}>
          <Grid container spacing={3}>
            <Grid item xs={2} style={{ marginLeft: 250 }}>
              <Paper>
                <button
                  onClick={this.Add}
                  style={{
                    borderWidth: 0,
                    backgroundColor: "transparent"
                  }}
                >
                  <AddIcon />
                </button>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper style={{ marginTop: -20 }}>
                <h1>{count}</h1>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper>
                <button
                  onClick={this.Minus}
                  style={{ borderWidth: 0, backgroundColor: "transparent" }}
                >
                  <MinusIcon />
                </button>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Counter;

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

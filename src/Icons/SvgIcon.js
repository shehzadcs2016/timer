import React from "react";
import AddToQueueSharpIcon from "@material-ui/icons/AddToQueueSharp";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import { makeStyles } from "@material-ui/core/styles";

export const AddIcon = props => {
  return (
    <AddToQueueSharpIcon
      style={{ fontSize: 40, color: "blue", opacity: 0.8 }}
    />
  );
};

export const MinusIcon = props => {
  return (
    <IndeterminateCheckBoxIcon
      style={{ fontSize: 40, color: "blue", opacity: 0.8 }}
    />
  );
};

export const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const HookApp = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setTimeout(setDate(new Date(), 1000));
    return () => clearTimeout(timer);
  }, [date]);

  return (
    <div className="App">
      <Card
        style={{
          backgroundColor: "pink",
          width: "60%",
          marginLeft: 200,
          marginTop: 90
        }}
        className={useStyles.card}
      >
        <CardActionArea>
          <CardMedia
            className={useStyles.media}
            src="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h2"
              component="h2"
              style={{ color: "blue" }}
            >
              Clock
            </Typography>
            <Typography
              variant="h4"
              color="textSecondary"
              component="p"
              style={{ color: "green" }}
            >
              {`Time is: ${date.toLocaleTimeString()}`}
            </Typography>
            <Typography variant="h4" color="textSecondary" component="p">
              {`Date is: ${date.toLocaleDateString()}`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Pop up For Day
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default HookApp;

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    backgroundColor: "black"
  },
  media: {
    height: 140
  }
});

/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class ClassApp extends React.Component {
  state = { date: new Date(), id: null };
  componentDidMount() {
    const { id } = this.state;

    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }
  popUpDay = () => {
    const { date } = this.state;
    // console.log(date);
    var dayName = date.toString().split(" ")[0];
    alert(`Today is : ${dayName}`);
  };

  render() {
    const { date } = this.state;
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
            <Button size="small" color="primary" onClick={this.popUpDay}>
              Pop up For Day
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default ClassApp;

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    backgroundColor: "black"
  },
  media: {
    height: 140
  }
});

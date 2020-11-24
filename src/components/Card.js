/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    marginTop: 16,
    margin: 8,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export const YaagCard = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.image}
        title="Paella dish"
      />
      <CardContent className="card-content">
        <div className="card-title-wrapper">
          <span className="card-title">{props.title}</span>
        </div>
      </CardContent>
      <CardContent className="card-content-two">
        <div className="card-title-wrapper-two">
          <span className="card-title">₹{props.price}</span>
        </div>
        <div className="card-title-wrapper-two">
          <span className="card-title">{props.points}</span>
        </div>
      </CardContent>
      <CardContent className="card-content-three">
        <div className="card-title-wrapper-three">
          <span className="card-title">
            Days
            <br />
            {props.days}
          </span>
        </div>
        <div className="card-title-wrapper-three">
          <span className="card-title">
            Hours
            <br />
            {props.hours}
          </span>
        </div>
        <div className="card-title-wrapper-three">
          <span className="card-title">
            Minutes
            <br />
            {props.minutes}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export const ImpactCard = (props) => (
  <div className="impact-card-item">
    <img src={props.image} alt={props.alt} style={{ width: 64, height: 64 }} />
    <span className="text">{props.text}</span>
  </div>
);

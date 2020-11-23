import React from "react";
import CardDash from "../components/CardDash";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class YaagDashboardList extends React.Component {
  render() {
    return (
      <div>
        <b>Welcome to Yaag Dashboard</b>
        <CardDash />
        {this.props.todos.map(todo => (
        <li>Initial : {todo.initial}</li>
        ))}
        {this.props.todos.map(todo => (
        <li>Current : {todo.current}</li>
        ))}
        {this.props.todos.map(todo => (
        <li>Target : {todo.target}</li>
        ))}
        {this.props.todos.map(todo => (
        <li>Days Remaining : {todo.dayrem}</li>
        ))}
        {this.props.todos.map(todo => (
        <li>Total Days of Yaag : {todo.totaldays}</li>
        ))}
        {this.props.todos.map(todo => (
        <li>Rewards Awarded : {todo.rewardsawarded}</li>
        ))}
        {this.props.todos.map(todo => (
        <li>Points Awarded : {todo.pointsawarded}</li>
        ))}
    </div>
    )
  }
}

export default YaagDashboardList;
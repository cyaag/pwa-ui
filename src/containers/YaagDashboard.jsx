
import React, { Component } from 'react';
import "../App.css"
import {Redirect} from 'react-router-dom';
import Input from '../components/Input';
import axios from "axios";
import YaagDashboardList from "./YaagDashboardList";

class YaagDashboard extends React.Component {

  /*constructor(props) {
    super(props);
 
    this.state = {
      dashb:[],
    };
  }*/

  state = {
    todos: [
      {
        id: 1,
        initial: "Setup development environment",
        current: "10",
        target: "100",
        dayrem: "5",
        totaldays:"10",
        rewardsawarded: "1000",
        pointsawarded: "4000"
      }
    ]
   };

  componentDidMount() {

    axios.get("http://localhost:3000/dashboard")
    .then (response => this.setState({todos : response.data}));
    /*fetch('/dashboard', {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response => {
      response.json().then(data => {
        this.setState({data});
        console.log("DASHBOARD DATA =" + JSON.stringify(data));   

      })
    })*/
  }

  render() {
    return (
      <div>
         <YaagDashboardList todos={this.state.todos} />        
      </div>
    )
   /* const {dashb} = (this.state);
    console.log("DASHB = " + JSON.stringify(this.state));
      return (
        <ul>
        {(dashb).map(hit =>
          <div>
            <p> {hit._id}</p>
          </div>
        )}
      </ul>

      )*/
  }
}

export default YaagDashboard;
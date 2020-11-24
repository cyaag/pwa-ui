/** @format */

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Routes from "./routes";
//import SideMenu from "../components/SideMenu";

class App extends Component {
  constructor() {
    super();
    this.state = {
      appName: "Cyaag Login",
    };
  }

  render() {
    return (
      <div>
        <Routes name={this.state.appName} />
      </div>
    );
  }
}
export default App;

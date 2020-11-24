/** @format */

import { Button } from "@material-ui/core";
import React from "react";
import "../App.css";

export const DrawerMenu = ({
  Type = "",
  title = "Dashboard",
  onClick = () => console.log("onclicked"),
}) => (
  <button onClick={onClick} className="drawer">
    <div className="drawer-icon">
      <Type
        style={{
          margin: 4,
          color: "#fff",
        }}
      />
    </div>
    <span class="drawer-menu-title">{title}</span>
  </button>
);

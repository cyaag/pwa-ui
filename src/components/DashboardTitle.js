/** @format */

import { Typography } from "@material-ui/core";
import React from "react";
export const TextTitle = (props) => (
  <Typography
    variant="h6"
    style={{ fontWeight: "600", color: "#055F55", textTransform: "uppercase" }}
  >
    {props.title}
  </Typography>
);

/** @format */

import React, { Component, useState } from "react";
//import FacebookLogin from 'react-facebook-login';
import GoogleLogin from "react-google-login";
import { PostData } from "../services/PostData";
import { Redirect } from "react-router-dom";
//import { Box } from '@material-ui/core';
import {
  Grid,
  Button,
  Typography,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
// import Layout from "./Layout";
import Logo from "../assets/logo.png";
const useStyles = makeStyles((theme) => ({
  logoContainer: {
    background: "#2C7973",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    display: "flex",
    height: "200px",
  },
}));
export default function Login() {
  const [loginError, setLoginError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const classes = useStyles();
  const signup = (res, type) => {
    let postData;
    if (type === "google") {
      //} && res.w3.U3) {
      postData = {
        // name: res.w3.ig,
        // provider: type,
        // email: res.w3.U3,
        // provider_id: res.El,
        // token: res.Zi.access_token,
        // provider_pic: res.w3.Paa
      };
    }

    if (postData) {
      PostData("signup", postData).then((result) => {
        let responseJson = result;
        sessionStorage.setItem("userData", JSON.stringify(responseJson));
        setRedirect(true);
      });
    } else {
    }
  };

  if (redirect || sessionStorage.getItem("userData")) {
    return <Redirect to={"/home"} />;
  }

  // const responseFacebook = (response) => {
  //     console.log("facebook console");
  //     console.log(response);
  //     this.signup(response, 'facebook');
  // }

  const responseGoogle = (response) => {
    console.log("google console");
    console.log(response);
    this.signup(response, "google");
  };

  return (
    <Container maxWidth="xl" style={{ margin: 0, padding: 0 }}>
      {/* <Layout /> */}
      <div className={classes.logoContainer}>
        <img src={Logo} />
      </div>

      <Box m={5}>
        <GoogleLogin
          clientId="632398293150-vcd926s2uh0qmi3h6uut1pc8vs8vrj56.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </Box>
    </Container>
  );
}

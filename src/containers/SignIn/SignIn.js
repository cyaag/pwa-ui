/** @format */

import React, { Component, useState } from "react";
//import FacebookLogin from 'react-facebook-login';
import GoogleLogin from "react-google-login";
import { PostData } from "../../services/PostData";
import { Redirect } from "react-router-dom";
//import { Box } from '@material-ui/core';
import {
  Grid,
  Typography,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Box,
} from "@material-ui/core";
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green, purple } from "@material-ui/core/colors";
import MenuIcon from "@material-ui/icons/Menu";
import PhoneIcon from "@material-ui/icons/Phone";
// import Layout from "../../components/Layout";
import Logo from "../../assets/logo.png";
import { LoginTextArea } from "../../components";
const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid #F8B34C",
    lineHeight: 1.5,
    backgroundColor: "#F8B34C",
    borderRadius: 24,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#F8B34C",
      borderColor: "#F8B34C",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#F8B34C",
      borderColor: "#F8B34C",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
})(Button);

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  },
}))(Button);

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
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});
export default function Login(props) {
  const [loginError, setLoginError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [phone, setPhone] = useState("");
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
  console.log("state", redirect);
  if (redirect || sessionStorage.getItem("userData")) {
    return <Redirect to={"/home"} />;
  }
  console.log("state", redirect);

  // const responseFacebook = (response) => {
  //     console.log("facebook console");
  //     console.log(response);
  //     this.signup(response, 'facebook');
  // }

  const responseGoogle = (response) => {
    console.log("google console");
    console.log(response);
    signup(response, "google");
  };
  const handlePhone = (e) => {
    console.log("phone", phone);
    let value = e.target.value;
    setPhone(value);
    console.log("phone Number", phone);
  };
  const handleSignIn = ({ e }) => {
    // e.preventDefault();
    props.history.push("/home");
  };
  return (
    <Container maxWidth="xl" style={{ margin: 0, padding: 0 }}>
      {/* <Layout /> */}
      <div className={classes.logoContainer}>
        <img src={Logo} className="logo" />
      </div>
      <div className="login--container">
        <LoginTextArea
          title="Phone Number"
          placeholder="Phone Number"
          Type={PhoneIcon}
          value={phone}
          onChange={handlePhone}
        />
        <div className="forgot-button">
          <Button className="forgot">Forgot Password?</Button>
        </div>
        <div className="sign-button">
          <BootstrapButton
            variant="contained"
            color="primary"
            disableRipple
            className="sign"
            onClick={handleSignIn}
          >
            SignIn
          </BootstrapButton>
        </div>
      </div>
      <div className="sign-option">
        <hr color="#d3d3d3" style={{ width: 32, margin: 8 }} />
        <Typography className="sign-in-text">Or Sign in with</Typography>
        <hr color="#d3d3d3" style={{ width: 32, margin: 8 }}></hr>
      </div>
      <div className="sign-in-button">
        <Box m={1}>
          <GoogleLogin
            clientId="632398293150-vcd926s2uh0qmi3h6uut1pc8vs8vrj56.apps.googleusercontent.com"
            // buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </Box>
        <Box m={1}>
          <GoogleLogin
            clientId="632398293150-vcd926s2uh0qmi3h6uut1pc8vs8vrj56.apps.googleusercontent.com"
            // buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </Box>
        <Box m={1}>
          <GoogleLogin
            clientId="632398293150-vcd926s2uh0qmi3h6uut1pc8vs8vrj56.apps.googleusercontent.com"
            // buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </Box>
      </div>
    </Container>
  );
}

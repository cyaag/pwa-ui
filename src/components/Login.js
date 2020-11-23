import React, { Component } from 'react';
//import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { PostData } from '../services/PostData';
import { Redirect } from 'react-router-dom';
//import { Box } from '@material-ui/core';
import { Grid, Button, Typography, Container, AppBar, Toolbar, IconButton, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Layout from "./Layout";



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginError: false,
            redirect: false
        };
        this.signup = this.signup.bind(this);
    }

    signup(res, type) {
        let postData;
        if (type === 'google') { //} && res.w3.U3) {
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
            PostData('signup', postData).then((result) => {
                let responseJson = result;
                sessionStorage.setItem("userData", JSON.stringify(responseJson));
                this.setState({ redirect: true });
            });
        } else { }
    }

    render() {
       


        if (this.state.redirect || sessionStorage.getItem('userData')) {
            return (<Redirect to={'/home'} />)
        }

        // const responseFacebook = (response) => {
        //     console.log("facebook console");
        //     console.log(response);
        //     this.signup(response, 'facebook');
        // }

        const responseGoogle = (response) => {
            console.log("google console");
            console.log(response);
            this.signup(response, 'google');
        }
        
        return (

            <Container maxWidth = 'xl'>
                
                <Layout />
                <Box m={5}>
                    <GoogleLogin
                        clientId="632398293150-vcd926s2uh0qmi3h6uut1pc8vs8vrj56.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle} />
                </Box>
            </Container>

        );
    }
}
export default Login;





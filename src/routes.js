import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import Form from './containers/FormContainer'

const Routes = () => (
<BrowserRouter >
    <Switch>
    <Route exact path="/" component={Login}/>
    <Route path="/logout" component={Logout}/>
    <Route path="/home" component={Form}/>
   </Switch>
</BrowserRouter>
);
export default Routes;
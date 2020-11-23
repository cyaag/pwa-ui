import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import Form from './containers/FormContainer';
import YaagDS from './containers/YaagDashboard';
import CardDash from "./components/CardDash";

const Routes = () => (
<BrowserRouter >
    <Switch>
    <Route exact path="/" component={Login}/>
    <Route path="/logout" component={Logout}/>
    <Route path="/home" component={Form}/>
    <Route path="/YDS" component ={YaagDS}/>
    <Route path="/CD" component = {CardDash}/>

   </Switch>
</BrowserRouter>
);
export default Routes;
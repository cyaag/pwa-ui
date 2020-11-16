import React, { Component } from 'react';
import Routes from './routes';
import './App.css';


class App extends Component {

constructor(){
super();
    this.state={
    appName: "Cyaag Login",
}
}

render() {
return (
<div>
<Routes name={this.state.appName}/>
</div>
);
}
}
export default App;

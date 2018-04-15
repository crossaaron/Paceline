import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Events from "./pages/Events";
import './App.css';
import Login from "./containers/LoginPage"
import Signup from "./containers/SignUpPage"

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/events" component={Events}/>
        {/* <Route exadt path="/roster" component={Roster}/> */}
        <Route exact path="/login" component={Login}/>
        <Route exact path="/" component={Signup}/>
        <Route exact path="/dashboard" component={Events}/>
      </Switch>
    </div>
  </Router>
);

export default App;

// save the token -- as cookie (req.cookies)
// to protect routes on server, write an express middleware function and use that on protected routes to see if the user has a json token cookie https://appdividend.com/2018/02/03/express-middleware-tutorial-example-scratch/#Authentication_Example

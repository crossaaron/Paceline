import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import RosterList from "./pages/RosterList";
import Register from "./pages/Login";
import Login from "./pages/SignIn";
import './App.css';
// import './../components/Login/Form.css';



const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/roster" component={RosterList} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  </Router>
);

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import RosterList from "./pages/RosterList";
import './App.css';



const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/roster" component={RosterList} />
      </Switch>
    </div>
  </Router>
);

export default App;

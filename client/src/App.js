import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Events from "./pages/Events";
import RosterList from "./pages/RosterList";
import './App.css';



const App = () => (
  <Router>
    <div>
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={Events} />
        <Route exact path="/roster" component={RosterList} />
        {/* <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} /> */}
=======
        {/* <Route exact path="/" component={Home}  /> */}
        <Route exact path="/events" component={Events}/>
        {/* <Route exadt path="/roster" component={Roster}/> */}
>>>>>>> master
      </Switch>
    </div>
  </Router>
);

export default App;





// class App extends Component {
//   state = {
//     date: new Date()
//   };

//   render() {
//     return <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Paceline Team Manager</h1>
//           <img src={logo} className="App-logo" alt="logo" />
//         </header>
//         <Navbar />
//         <p className="App-intro" />
//         <CalendarView  />
//         <Footer />
//       </div>;
//   }
// }

// export default App;

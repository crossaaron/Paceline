import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Events from "./pages/Events";
import './App.css';



const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Events} />
        {/* <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} /> */}
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

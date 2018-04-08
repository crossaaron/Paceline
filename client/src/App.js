import React, { Component } from 'react';
import logo from "./generated.svg";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return <div className="App">
        <header className="App-header">
          <h1 className="App-title">Paceline Team Manager</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Navbar />
        <p className="App-intro" />
        <Footer />
      </div>;
  }
}

export default App;

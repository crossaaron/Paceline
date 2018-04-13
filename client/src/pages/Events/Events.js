import React, { Component } from "react";
import CalendarView from "../../components/Calendar";
import EventForm from "../../components/EventForm";
import logo from "../../generated.svg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Col, Row, Container } from "../../components/Grid";

class Events extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Paceline Team Manager</h1>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
          <Navbar />
          <Container fluid>
            <Row>
              <div>
              <Col size="sm-6" />
                <EventForm />
              <Col size="sm-6">
                <CalendarView />
              </Col>
              </div>
            </ Row>
          </ Container>
          <Footer />
        
      </div>
    );
  }
}

export default Events;

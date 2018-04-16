import React, { Component } from "react";
import CalendarContainer from "../../components/Calendar";
import EventForm from "../../components/EventForm";
import logo from "../../generated.svg";
import Navbar from "../../components/Navbar";
import EventModal from "../../components/EventModal";
import Footer from "../../components/Footer";
import { Col, Row, Container } from "../../components/Grid";

class Events extends Component {
  constructor(props) {
    super(props);

    this.eventModalRef = React.createRef();
  }

  state = {
    modalIsOpen: false
  };

  handleDateChange = eventData => {
    this.eventModalRef.handleModalToggle();

    console.log(eventData);
  }

  render() {

    return (
    
      <div>
        <EventModal ref= {(ref) => this.eventModalRef = ref}/>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Paceline Team Manager</h1>
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          </div>
        <Navbar />
        <Container fluid>
          <Row>
            <Col size="sm-6">
              <EventForm />
            </Col>
            <Col size="sm-6">
              <CalendarContainer onChange={this.handleDateChange} />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default Events;

import React, { Component } from "react";
import CalendarContainer from "../../components/Calendar";
import EventForm from "../../components/EventForm";
import logo from "../../generated.svg";
import Navbar from "../../components/Navbar";
import EventModal from "../../components/EventModal";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";

class Events extends Component {
  constructor(props) {
    super(props);

    this.eventModalRef = React.createRef();
  }

  state = {
    modalIsOpen: false,
    name: "",
    date: "",
    location: "",
    url: "",
  };

  handleDateChange = eventData => {
    this.eventModalRef.handleModalToggle();

    console.log(eventData);
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.name && this.state.date && this.state.location && this.state.url) {
  //     API.saveEvent({
  //       name: this.state.name,
  //       date: this.state.date,
  //       location: this.state.synopsis
  //       url: this.state.name
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <div>
        <EventModal ref={ref => (this.eventModalRef = ref)} />
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
    );
  }
}

export default Events;

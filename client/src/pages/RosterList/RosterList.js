import React, { Component } from "react";
import logo from "../../generated.svg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Roster, TeamMember } from "../../components/Roster";

class RosterList extends Component {
  state = {
    team_members: [],
    member_name: "",
  };

  render() {
      return <div>
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
            <Roster>
              <TeamMember />
            </Roster>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>;
  }
}

export default RosterList;

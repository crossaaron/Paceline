import React, { Component } from "react";
import logo from "../../generated.svg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Roster, TeamMember } from "../../components/Roster";

class RosterList extends Component {
  state = {
    teamMembers: [],
    name: "",
    email: "",
    paidDues: "",
    memberSince: ""
  }

componentDidMount() {
  this.loadRoster();
}

loadRoster = () => {
  API.getRoster()
    .then(res =>
      this.setState({teamMembers: res.data, name: "", email: "", paidDues: "", memberSince:""})
    )
    .catch(err => console.log(err));
}

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
            {this.state.teamMembers.length ? (
            <Roster>
              {this.state.teamMembers.map(member =>(
                <TeamMember key={member._id}>
                  <strong>
                    {member.name} {member.email}
                  </strong>
                </TeamMember>
              ))}
            </Roster>
            ) 
            : (<h3>No Members</h3>)} 
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>;
  }
}

export default RosterList;

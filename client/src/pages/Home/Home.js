import React, { Component } from "react";
//import logo from "../../generated.svg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Col, Row, Container } from "../../components/Grid";
import Video from "../../components/Video";

class Home extends Component {

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Paceline Team Manager</h1>
          </header>
        </div>
        <Navbar />
        <Container fluid>
          <Row>
            <Col size="sm-12" className="videoContainer">
              <Video />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
//import DeleteBtn from "../../components/DeleteBtn";
//import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Roster, TeamMember } from "../../components/Roster";
//import { Input, TextArea, FormBtn } from "../../components/Form";

class RosterList extends Component {
  state = {
    team_members: [],
    member_name: "",
  };

  componentDidMount() {
    this.loadTeam();
  }

  loadTeam = () => {
    API.getBooks()
      .then(res =>
        this.setState({ team_members: res.data, member_name: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <div>
              <h1>ROSTER</h1>
            </div>
            {this.state.books.length ? (
              <Roster>
                {this.state.books.map(book => (
                  <TeamMember key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        <h1>Hello World</h1>
                      </strong>
                    </Link>
                  </TeamMember>
                ))}
              </Roster>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RosterList;

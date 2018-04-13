import React from "react";
import "./EventForm.css";
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";

const EventForm = props => (
    <div>
      <Container fluid>
        <Row>
          <Col size="sm-6">
            <form>
              <Input
                //   value={this.state.title}
                //   onChange={this.handleInputChange}
                //   name="title"
                placeholder="Name of Event"
              />
              <Input
                //   value={this.state.author}
                //   onChange={this.handleInputChange}
                //   name="author"
                placeholder="Date"
              />
              <Input
                //   value={this.state.synopsis}
                //   onChange={this.handleInputChange}
                //   name="synopsis"
                placeholder="Location"
              />
              <Input
                //   value={this.state.synopsis}
                //   onChange={this.handleInputChange}
                //   name="synopsis"
                placeholder="Link to Website"
              />
              <TextArea
                //   value={this.state.synopsis}
                //   onChange={this.handleInputChange}
                //   name="synopsis"
                placeholder="Who's Registered"
              />
              <FormBtn
              //   disabled={!(this.state.author && this.state.title)}
              //   onClick={this.handleFormSubmit}
              >
                Save Event
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );

export default EventForm;

import React from "react";
import "./EventForm.css";
import { Input, TextArea, FormBtn } from "../../components/Form";

const EventForm = props => (
  <div className="mainForm">
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
  </div>
);

export default EventForm;

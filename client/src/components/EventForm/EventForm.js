import React from "react";
import "./EventForm.css";
import { Input, FormBtn } from "../../components/Form";

const EventForm = props => (
  <div>
    <div className="well">
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
        </form>
      </div>
    </div>
    <FormBtn id="btn"

    //   onClick={this.handleFormSubmit}
    >
      Save Event
    </FormBtn>
  </div>
);

export default EventForm;

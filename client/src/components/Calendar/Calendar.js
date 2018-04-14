import React, { Component } from "react";
import "./Calendar.css";
import Calendar from "react-calendar/dist/entry";
import API from "../../utils/API";

class CalendarContainer extends Component {
  state = {
    date: new Date()
  };

  handleDateChange = date => {
    API.getEvents({ date })
      .then(res => this.props.onChange(res.data));
  }
  render() {
    return (
      <div className="Jumbotron">
        <Calendar value={this.state.date} onChange={this.handleDateChange} />
      </div>
    );
  }
}

export default CalendarContainer;

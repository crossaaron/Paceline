import React from "react";
import "./Calendar.css";
import Calendar from "react-calendar/dist/entry";

const CalendarView = props => (
  <div className="Jumbotron">
    <Calendar onClickDay={() => console.log("day clicked")} />
  </div>
);

export default CalendarView;

import React, { Component } from "react";

const MemberModal = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Email:</strong> {props.email}
        </li>
        <li>
          <strong>Status:</strong> {props.status}
        </li>
        <li>
          <strong>Latest Finish Time:</strong> {props.time}
        </li>
      </ul>
    </div>
  </div>
);

export default MemberModal;
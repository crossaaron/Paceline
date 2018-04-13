import React from "react";
import "./Roster.css";

// Roster List

export const Roster = ({ children }) => {
    return (
      <div className="list-overflow-container">
        <ul className="list-group">
          {children}
        </ul>
      </div>
    );
};

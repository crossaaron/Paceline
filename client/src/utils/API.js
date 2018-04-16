import axios from "axios";

export default {
  // Gets user info
  getTeam: function() {
    return axios.get("/api/teams/");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the User with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(UserData) {
    return axios.post("/api/users", UserData);
  },
  //Gets event with given id
  getEvent: function(id) {
    return axios.get("/api/events/" + id);
  },
  //Gets event with given params e.g. { date: new Date() }
  getEvents: function(params) {
    return axios.get("/api/events", { params });
  },
  // Deletes Event with the given ID
  deleteEvent: function(id) {
    return axios.delete("/api/events/" + id);
  },
  // Saves Event with the given ID
  saveEvent: function(EventData) {
    return axios.post("/api/events", EventData);
  }
};

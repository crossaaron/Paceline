import axios from "axios";

export default {
  // Gets user info
  getRoster: function() {
    return axios.get("/api/roster/");
  },
  // Gets the user with the given id
  getMember: function(id) {
    return axios.get("/api/members/" + id);
  },
  // Deletes the User with the given id
  deleteMember: function(id) {
    return axios.delete("/api/members/" + id);
  },
  // Saves a user to the database
  saveMember: function(UserData) {
    return axios.post("/api/members", UserData);
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
  },
  saveUser: function(credentials) {
    return axios.post("/api/users", credentials);
  },
  getUser: function(credentials) {
    return axios.get("/api/users/", { credentials });
  }
};

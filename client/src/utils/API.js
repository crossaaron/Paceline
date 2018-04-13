// import axios from "axios";

export default {
  // Gets user info
  getTeam: function() {
    return axios.get("/api/team/");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the User with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a user to the database
  saveUser: function(UserData) {
    return axios.post("/api/user", UserData);
  },
  //Gets event with given id
  getEvent: function(id) {
    return axios.get("/api/event/" + id);
  },
  // Deletes Event with the given ID
  deleteEvent: function(id) {
    return axios.delete("/api/event/" + id);
  },
  // Saves Event with the given ID
  saveEvent: function(EventData) {
      return axios.post("/api/user", EventData);
  }
};

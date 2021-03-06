const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  url: { type: String, required: true}
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;

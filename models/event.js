const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const event = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true }
});

const Event = mongoose.model("Event", teamSchema);

module.exports = Event;

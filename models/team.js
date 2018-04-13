const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const team = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;

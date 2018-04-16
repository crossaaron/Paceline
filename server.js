const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");


mongoose.Promise = global.Promise;
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
mongoose.connect(
  process.env.MONGDB_URI || "mongodb://localhost:27017/paceline"
);
app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
);

app.listen(PORT, () => console.log(`🌎 ==> Server now on port ${PORT}!`));

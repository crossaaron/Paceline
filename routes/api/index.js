const router = require("express").Router();
const eventRoutes = require("./events");
const rosterRoutes = require("./roster");

//api routes
router.use("/roster", rosterRoutes);
router.use("/events", eventRoutes);

//if no routes hit call react app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

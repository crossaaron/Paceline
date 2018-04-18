const router = require("express").Router();
const eventRoutes = require("./events");
const rosterRoutes = require("./roster");

router.use("/roster", rosterRoutes);
router.use("/events", eventRoutes);

module.exports = router;

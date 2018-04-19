const router = require("express").Router();
const eventRoutes = require("./events");
const rosterRoutes = require("./roster");
const authRoutes = require("./auth");

router.use("/roster", rosterRoutes);
router.use("/events", eventRoutes);
router.use("/signup", authRoutes);

module.exports = router;

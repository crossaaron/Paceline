const router = require("express").Router();
const eventController = require("../../controllers/eventController");

router.route("/")
    .get(eventController.find)
    .post(eventController.create);

router.route("/:id")
    .get(eventController.findById)
    .put(eventController.update)
    .delete(eventController.delete);

module.exports = router;

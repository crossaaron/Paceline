const router = require("express").Router();
const memberController = require("../../controllers/memberController");

router
  .route("/")
  .get(memberController.findAll)
  .post(memberController.create);

router
  .route("/:id")
  .get(memberController.findById)
  .put(memberController.update)
  .delete(memberController.delete);

module.exports = router;

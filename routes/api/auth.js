const router = require("express").Router();

// router.route("/signup")
//     .post(function() {
//         console.log("helloo");
//     });

const userController = require("../../controllers/userController");

router.route("/signup")
    // .get(userController.find)
    .post(userController.create);

module.exports = router;
const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/delivery", controller.getUsers);
router.post("/createdelivery", controller.addUser);
router.post("/updatedelivery", controller.updateUser);
router.post("/deletedelivery", controller.deleteUser);

module.exports = router;


const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/users", controller.getUsers);
router.post("/createuser", controller.addUser);
router.get("/getuserbyid/:id", controller.getUserById);
router.delete("/deleteuser/:id", controller.deleteUser);
router.put("/updateuser/:id", controller.updateUser);

module.exports = router;

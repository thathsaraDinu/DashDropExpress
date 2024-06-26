const express = require("express");
const router = express.Router();
const controller = require("./controller");
const { verifyToken } = require("./authMiddleware");

router.get("/users", controller.getUsers);
router.post("/createuser", controller.addUser);
router.get("/getuserbyid/:id", controller.getUserById);
router.delete("/deleteuser/:id", controller.deleteUser);
router.put("/updateuser/:id", controller.updateUser);
router.post("/loginuser", controller.loginUser);
router.post("/verifyOTP", controller.verifyOTP);
router.get("/getuserbyemail", controller.getUserByEmail);
router.post("/uploadprofilephoto", controller.uploadProfilePhoto);
router.post("/checkpassword/:id", controller.checkPassword);


// Protected route


module.exports = router;

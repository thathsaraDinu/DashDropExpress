const express = require("express");
const router = express.Router();
const controller = require("./controller");


router.get("/feedbacks", controller.getfeedbacks);
router.post("/createfeedbacks", controller.addfeedbacks);
router.get("/getfeedbackbyid/:id", controller.getfeedbackById);
router.put("/updatefeedbacks/:id", controller.updatefeedbacks);
router.delete("/deletefeedbacks/:id", controller.deletefeedbacks);


module.exports = router;
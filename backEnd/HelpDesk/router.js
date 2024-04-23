const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/tickets", controller.getTickets);
router.post("/createticket", controller.addTicket);
router.post("/updateticket", controller.updateTicket);
router.post("/deleteticket", controller.deleteTicket);

module.exports = router;

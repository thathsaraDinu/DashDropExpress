const express = require("express");
const app = express();
const cors = require("cors");
const controller = require("./controller");
app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// API
app.get("/tickets", (req, res) => {
  controller.getTicket((callback) => {
    res.send(callback);
  });
});

// API
app.post("/createticket", (req, res) => {
  controller.addTicket(req.body, (callback) => {
    res.send(callback);
  });
});

// API
app.post("/updateticket", (req, res) => {
  controller.updateTicket(req.body, (callback) => {
    res.send(callback);
  });
});

// API
app.post("/deleteticket", (req, res) => {
  controller.deleteTicket(req.body, (callback) => {
    res.send(callback);
  });
});

module.exports = app;


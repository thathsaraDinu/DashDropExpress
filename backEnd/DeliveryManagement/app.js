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
app.get("/delivery", (req, res) => {
  controller.getUsers((callback) => {
    res.send(callback);
  });
});

// API
app.post("/createdelivery", (req, res) => {
  controller.addUser(req.body, (callback) => {
    res.send(callback);
  });
});

// API
app.post("/updatedelivery", (req, res) => {
  controller.updateUser(req.body, (callback) => {
    res.send(callback);
  });
});

// API
app.post("/deletedelivery", (req, res) => {
  controller.deleteUser(req.body, (callback) => {
    res.send(callback);
  });
});

module.exports = app;


const express = require("express");
const app = express();
const cors = require("cors");
const controller = require("./controller");
app.use(cors());
const UserModel = require("./model");

app.use(express.json());

// API
app.get("/users", (req, res) => {
  controller.getUsers((callback) => {
    res.send(callback);
  });
});

app.get("/getuserbyid/:id", (req, res) => {
  controller.getUserById((callback) => {
    res.send(callback);
  });
});

// API
app.post("/createuser", (req, res) => {
  controller.addUser(req.body, (callback) => {
    res.send(callback);
  });
});

// API
app.put("/updateuser/:id", (req, res) => {
  controller.updateUser(req.body, (callback) => {
    res.send(callback);
  });
});

// API
app.delete("/deleteuser/:id", (req, res) => {
  controller.deleteUser(req.body, (callback) => {
    res.send(callback);
  });
});

module.exports = app;

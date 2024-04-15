const express = require('express');
const app = express();
const cors = require('cors');
const controller=require('/.controller')
app.use(cors());


app.use(express.json());

// API
app.get("/feedbacks", (req, res) => {
  controller.getfeedbacks((callback) => {
    res.send(callback);
  });
});

//API
app.get("/getfeedbackbyid/:id", (req, res) => {
  controller.getfeedbackById((callback) => {
    res.send(callback);
  });
});



// API
app.post("/createfeedbacks", (req, res) => {
  controller.addfeedbacks(req.body, (callback) => {
    res.send(callback);
  });
});

// API
app.put("/updatefeedbacks/:id", (req, res) => {
  controller.updatefeedbacks(req.body, (callback) => {
    res.send(callback);
  });
});

// API
app.delete("/deletefeedbacks/:id", (req, res) => {
  controller.deletefeedbacks(req.body, (callback) => {
    res.send(callback);
  });
});

module.exports=app;
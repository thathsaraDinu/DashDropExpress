const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  name: String,
  drivernumber: String,
  currentValue: String,
  description: String,
  
});

const Feedback = mongoose.model("feedback", feedbackSchema);

module.exports = Feedback;


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: String,
  did: String,
  d_name: String,
  c_name: String,
  phoneNumber: String,
  address: String,
  email: String,
  date: Date,
});

const Delivery1 = mongoose.model("Delivery1", userSchema);

module.exports = Delivery1;



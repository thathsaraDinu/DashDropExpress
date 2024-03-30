
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: String,
  did: String,
  d_name: String,
  c_name: String,
  address: String,
  instruction: String,
  date: Date,
});

const Delivery1 = mongoose.model("Delivery1", userSchema);

module.exports = Delivery1;


/*
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: Number,
  d_name: String,
  c_name: String,
  address: String,
  instruction: String,
});

const Customer = mongoose.model("Customer", userSchema);

module.exports = Customer;
*/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: String,
  phoneNumber: String,
  address: String,
  email: String,
  NIC: String,
  city: String,
  comPreff: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;

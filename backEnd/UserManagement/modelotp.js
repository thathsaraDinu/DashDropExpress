const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userOtpverifySchema = new Schema({
  email: String,
  otp: String,
  createdAt: Date,
  expiresAt: Date,
});

const Otpmodule = mongoose.model("Otpmodule", userOtpverifySchema);

module.exports = Otpmodule;

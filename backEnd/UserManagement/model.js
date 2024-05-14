const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchemamodel = new Schema({
  userid: { type: String, required: true },
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, unique: true, required: true }, // Add unique constraint to email field
  address: { type: String, required: true },
  usertype: { type: String, required: true },
  password: { type: String, required: true },
  profilephoto: {
    type: String,
  },
});

const Usermod = mongoose.model("User", userSchemamodel);

module.exports = Usermod;

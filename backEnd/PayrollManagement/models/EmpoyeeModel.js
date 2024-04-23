const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
  },
  confirmationDate: {
    type: Date,
    default: null, // You can set a default value if needed
  },
});

module.exports = mongoose.model('Employee', employeeSchema);

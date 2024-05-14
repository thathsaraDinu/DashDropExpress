const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    match: [/^[A-Za-z]+$/, 'First name should contain only alphabets'],
  },
  lastname: {
    type: String,
    required: true,
    match: [/^[A-Za-z]+$/, 'Last name should contain only alphabets'],
  },
  email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
  },
  role: {
    type: String,
    required: true,
  },
  accountnumber: {
    type: Number,
    required: true,
    validate: {
      validator: function(v) {
        return /^\d{9,18}$/.test(v); // Example: account number should be between 9 and 18 digits
      },
      message: props => `${props.value} is not a valid account number!`
    }
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Other'],
  },
  phonenumber: {
    type: Number,
    required: true,
    validate: {
      validator: function(v) {
        return /^\d{10}$/.test(v); // Example: phone number should be 10 digits
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  employeementStetus: {
    type: String,
    required: true,
    enum: ['Full-time', 'Part-time', 'Temporary'],
  },
  salary: {
    type: Number,
  },
  confirmationDate: {
    type: Date,
    default: null,
  },
});

module.exports = mongoose.model('Employee', employeeSchema);

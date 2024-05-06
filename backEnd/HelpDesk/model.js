const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
  id: Number,
  cname: String,
  inquery: String,
  date: Date,
});

const Ticket = mongoose.model("Ticket", TicketSchema);

module.exports = Ticket;



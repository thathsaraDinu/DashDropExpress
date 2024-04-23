const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    id:Number,
    date:String,
    name:String,
    address:String,
    contact:String,
    email:String,
    Name:String,
    Address:String,
    Contact:String,
    item:String,
    quantity:Number,
    weight:Number,

});

const Order = mongoose.model('Order',orderSchema);

module.exports = Order;
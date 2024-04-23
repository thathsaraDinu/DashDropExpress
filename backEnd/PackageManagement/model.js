const mongoose = require('mongoose');
const Schema =mongoose.Schema;

const packageSchema = new Schema({
     id:Number,
     customerName:String,
     packageType:String,
     packageWeight:String,
   
});

const Package =mongoose.model('Package',packageSchema);

module.exports =Package;
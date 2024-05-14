const mongoose = require('mongoose');
const Schema =mongoose.Schema;

const studentSchema = new Schema({
    vin : Number,
    registrationNumber : String,
    vehicleType:String,
    model:String,
    selectedyear:Number,
    insuranceDetails:String,
    

});

const Student =mongoose.model('Student',studentSchema);

module.exports =Student;
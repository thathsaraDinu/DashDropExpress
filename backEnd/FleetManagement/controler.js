const { response } = require('./app');
const Student =require('./model');

const getStudents = (req,res,next) => { 
  Student.find()
     .then(response =>{
        res.json({response})
     })
     .catch(error => {
        res.json({ error})
     })
};
const addStudent =(req,res,next) =>{
    const student = new Student({
     vin : req.body.vin,
     registrationNumber : req.body.registrationNumber,
     vehicleType: req.body.vehicleType,
     model: req.body.model,
     selectedyear : req.body.selectedyear,
     insuranceDetails : req.body.insuranceDetails,
     
     
});
 student.save()
     .then(response =>{
         res.json({response})
 })
    .catch(error => {
      res.json({ error })
 })
}

const updateStudent =(req,res,next) => {
    const {vin,
           registrationNumber,
           vehicleType,
           model,
           selectedyear,
           insuranceDetails,
           
   } =req.body;
    Student.updateOne({vin:vin},{ 
         $set:{
            vin:vin,
            registrationNumber: registrationNumber,
            vehicleType: vehicleType,
            model:  model,
            selectedyear: selectedyear,
            insuranceDetails: insuranceDetails

         }})
    .then(response =>{
        res.json({response})
})
   .catch(error => {
     res.json({ error })
})
}
const deleteStudent =(req,res,next) => {
    const vin = req.body.vin;
    Student.deleteOne({vin:vin})
    .then(response =>{
        res.json({response})
})
   .catch(error => {
     res.json({ error })
})
}


exports.getStudents =getStudents;
exports.addStudent =addStudent;
exports.updateStudent =updateStudent;
exports.deleteStudent =deleteStudent;

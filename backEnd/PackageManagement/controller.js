const { response } = require('./app');
const Package =require('./model');

const getPackage = (req,res,next) => { 
  Package.find()
     .then(response =>{
        res.json({response})
     })
     .catch(error => {
        res.json({ error})
     })
};
const addPackage =(req,res,next) =>{
    const package = new Package({
        id:req.body.id,
        customerName:req.body.customerName,
        packageType:req.body.packageType,
        packageWeight:req.body.packageWeight,
        
     
});
 package.save()
     .then(response =>{
         res.json({response})
 })
    .catch(error => {
      res.json({ error })
 })
}
const updatePackage =(req,res,next) => {
    const { id,
            customerName,
            packageType,
            packageWeight,
            
     
   } =req.body;
    Package.updateOne({id:id},{ 
         $set:{
            customerName: customerName,
            packageType:packageType,
            packageWeight:packageWeight,
            
         }})
    .then(response =>{
        res.json({response})
})
   .catch(error => {
     res.json({ error })
})
}
const deletePackage =(req,res,next) => {
    const id = req.body.id;
    Package.deleteOne({id:id})
    .then(response =>{
        res.json({response})
})
   .catch(error => {
     res.json({ error })
})
}
exports.getPackage =getPackage;
exports.addPackage =addPackage;
exports.updatePackage =updatePackage;
exports.deletePackage =deletePackage;





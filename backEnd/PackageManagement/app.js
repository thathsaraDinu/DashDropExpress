const express =require('express');
const app = express();
const cors =require('cors');
const controller  = require('./controller');


app.use(cors());

app.use(
    express.urlencoded({
        extended:true,
    })
);

app.use(express.json());

app.get('/package',(req,res) =>{
    controller.getPackage((req, res, next) => {
        res.send();
    });
 });
 
 app.post('/createPackage',(req,res) =>{
     controller.addPackage(req.body,(callack) =>{
         res.send();
     });
     });
 app.post('/updatePackage',(req,res) =>{
     controller.updatePackage(req.body,(callack) =>{
         res.send(callack);
     });
     });
 app.post('/deletePackage',(req,res) =>{
     controller.deletePackage(req.body,(callack) =>{
         res.send(callack);
     });
     });

module.exports =app;

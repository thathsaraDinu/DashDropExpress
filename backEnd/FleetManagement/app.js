const express =require('express');
const app = express();
const cors =require('cors');
const controler  = require('./controler');

app.use(cors());

app.use(
    express.urlencoded({
        extended:true,
    })
);

app.use(express.json());

app.get('/students',(req,res) =>{
   controler.getStudents((req, res, next) => {
       res.send();
   });
});

app.post('/createstudent',(req,res) =>{
    controler.addStudent(req.body,(callack) =>{
        res.send();
    });
    });
app.post('/updatestudent',(req,res) =>{
    controler.updateStudent(req.body,(callack) =>{
        res.send(callack);
    });
    });
app.post('/deletestudent',(req,res) =>{
    controler.deleteStudent(req.body,(callack) =>{
        res.send(callack);
    });
    });
        
    


module.exports =app;
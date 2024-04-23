const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

app.get('/orders',(req,res)=>{
    controller.getOrders(req,res,next =>{
        res.send();

    });
});

app.get('/orders/search',(req,res)=>{
    const searchTerm = req.query.searchTerm;
    if (!searchTerm) {
        return res.status(400).json({ error: 'Search term is required' });
    }
    controller.searchOrders(req, res);

});

app.post('/createorder',(req,res)=>{
    const { id } = req.body;
    if (controller.checkIfIdExists(id)) {
        return res.status(400).json({ error: 'Duplicate ID' });
    }

    if (id < 0) {
        return res.status(400).json({ error: 'Negative ID not allowed' });
    }
    controller.addOrder(req,body,(callack) =>{
        res.send();
    });
});

app.post('/updateorder',(req,res)=>{
    controller.updateOrder(req,body,(callack) =>{
        res.send(callack);
    });
});

app.post('/deleteorder',(req,res)=>{ 
    controller.deleteOrder(req,body,(callack) =>{
        res.send(callack);
    });
});

module.exports = app;
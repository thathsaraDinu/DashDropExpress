const Order = require('./model');

const getOrders = (req, res, next) => {
    Order.find()
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ error });
        });
};
const searchOrders = (req, res, next) => {
    const searchTerm = req.query.searchTerm; 
    const regex = new RegExp(searchTerm, 'i'); 

    Order.find({
        $or: [
            { name: regex },
            { address: regex },
            { contact: regex },
            { email: regex },
            { Name: regex },
            { Address: regex },
            { Contact: regex },
            { item: regex },
        ]
    })
    .then(response => {
        res.json({ response });
    })
    .catch(error => {
        res.json({ error });
    });
};
const addOrder = (req, res, next) => {
    const { id } = req.body;
    // Check for duplicate ID
    Order.findOne({ id: id })
        .then(existingOrder => {
            if (existingOrder) {
                return res.status(400).json({ error: 'Duplicate ID' });
            }

            if (id < 0) {
                return res.status(400).json({ error: 'Negative ID not allowed' });
            }

            const order = new Order({
                id: id,
                date: req.body.date,
                name: req.body.name,
                address: req.body.address,
                contact: req.body.contact,
                email: req.body.email,
                Name: req.body.Name,
                Address: req.body.Address,
                Contact: req.body.Contact,
                item: req.body.item,
                quantity: req.body.quantity,
                weight: req.body.weight,
            });

            order.save()
                .then(response => {
                    res.json({ response });
                })
                .catch(error => {
                    res.json({ error });
                });
        })
        .catch(error => {
            res.json({ error });
        });
};

const updateOrder = (req, res, next) => {
    const { id, date, name, address, contact, email, Name, Address, Contact, item, quantity, weight } = req.body;

    if (id < 0) {
        return res.status(400).json({ error: 'Negative ID not allowed' });
    }

    Order.updateOne({ id: id }, {
        $set: {
            date: date,
            name: name,
            address: address,
            contact: contact,
            email: email,
            Name: Name,
            Address: Address,
            Contact: Contact,
            item: item,
            quantity: quantity,
            weight: weight
        }
    })
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ error });
        });
};

const deleteOrder = (req, res, next) => {
    const id = req.body.id;

    if (id < 0) {
        return res.status(400).json({ error: 'Negative ID not allowed' });
    }

    Order.deleteOne({ id: id })
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ error });
        });
};

exports.getOrders = getOrders;
exports.searchOrders = searchOrders;
exports.addOrder = addOrder;
exports.updateOrder = updateOrder;
exports.deleteOrder = deleteOrder;

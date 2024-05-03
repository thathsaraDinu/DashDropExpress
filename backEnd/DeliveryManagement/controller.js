const Delivery1 = require("./model");

const getUsers = (req, res, next) => {
  
  Delivery1.find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ message: error });
    });
};

const addUser = (req, res, next) => {
  
  const user = new Delivery1({
    id: req.body.id,
    did: req.body.did,
    d_name: req.body.d_name,
    c_name: req.body.c_name,
    phoneNumber: req.body.phoneNumber,
    address: req.body.address,
    email: req.body.email,
    date: req.body.date,
  });

  user
    .save()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ message: error });
    });
};

const updateUser = (req, res, next) => {
  const id = req.body.id;
  const did = req.body.did;
  const d_name = req.body.d_name;
  const c_name = req.body.c_name;
  const phoneNumber = req.body.phoneNumber;
  const address = req.body.address;
  const email = req.body.email;
  const date = req.body.date;

  Delivery1.updateOne(
    { id: id },
    {
      $set: {
        did: did,
        d_name: d_name,
        c_name: c_name,
        phoneNumber: phoneNumber,
        address: address,
        email: email,
        date: date,
      },
    }
  )
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ message: error });
    });
};

const deleteUser = (req, res, next) => {
  const id = req.body.id;

  Delivery1.deleteOne({ id: id })
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ message: error });
    });
};

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;

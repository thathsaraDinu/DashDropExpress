const Delivery1 = require("./model");

const getUsers = (req, res, next) => {
  console.log("show")
  Delivery1.find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ message: error });
    });
};

const addUser = (req, res, next) => {
  console.log("created");
  const user = new Delivery1({
    id: req.body.id,
    did: req.body.did,
    d_name: req.body.d_name,
    c_name: req.body.c_name,
    address: req.body.address,
    instruction: req.body.instruction,
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
  const address = req.body.address;
  const instruction = req.body.instruction;
  const date = req.body.date;

  Delivery1.updateOne(
    { id: id },
    {
      $set: {
        did: did,
        d_name: d_name,
        c_name: c_name,
        address: address,
        instruction: instruction,
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

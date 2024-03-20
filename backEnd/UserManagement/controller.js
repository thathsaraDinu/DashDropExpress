const User = require("./model");

const getUsers = (req, res, next) => {
  User.find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ message: error });
    });
};

const getUserById = (req, res) => {
  const id = req.params.id;
  User.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
};

const addUser = (req, res, next) => {
  const user = new User({
    fullName: req.body.fullName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    address: req.body.address,
    password: req.body.password,
    confpassword: req.body.confpassword,
    comPreff: req.body.comPreff,
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

const updateUser = (req, res) => {
  const id = req.params.id;
  User.findByIdAndUpdate(
    { _id: id },
    {
      fullName: req.body.fullName,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      address: req.body.address,
      password: req.body.password,
      confpassword: req.body.confpassword,
      comPreff: req.body.comPreff,
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
  const id = req.params.id;

  User.findByIdAndDelete({ _id: id })
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
exports.getUserById = getUserById;

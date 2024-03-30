const User = require("./model");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const bcrypt = require("bcrypt");

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


const addUser = async (req, res, next) => {
  try {
    const { fullName, phoneNumber, email, address, usertype, password } =
      req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Email address is already in use" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullName,
      phoneNumber,
      email,
      address,
      usertype,
      password: hashedPassword, // Store hashed password in the database
    });

    const savedUser = await newUser.save();

    // User successfully added
    return res.json({ message: "User created successfully", user: savedUser });
  } catch (error) {
    // Error occurred while checking or adding the user
    console.error("Error adding user:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while adding the user" });
  }
};


const updateUser = async (req, res) => {
  const { fullName, phoneNumber, email, address, usertype, password } =
    req.body;
  const id = req.params.id;

  try {
    const existingUser = await User.findOne({ email: email });

    if (existingUser && existingUser._id != id) {
      return res
        .status(409)
        .json({ message: "Email address is already in use" });
    }

    let hashedPassword;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }

    // Update user fields
    const updateFields = {
      fullName,
      phoneNumber,
      email,
      address,
      usertype,
    };

    // If password is provided, add it to the updateFields
    if (hashedPassword) {
      updateFields.password = hashedPassword;
    }

    // Update user in the database
    await User.findByIdAndUpdate(id, updateFields);

    return res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while updating user" });
  }
};


const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" }); // 404 Not Found
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Incorrect password" }); // 401 Unauthorized
    }

    const token = jwt.sign(
      { usertypetoken: existingUser.usertype, username: existingUser.fullName },
      JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    console.log(existingUser.usertype);
    return res
      .status(200)
      .json({ token, message: "exist", user: existingUser }); // 200 OK
  } catch (error) {
    console.error("Error logging in:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while logging in" }); // 500 Internal Server Error
  }
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
exports.loginUser = loginUser;

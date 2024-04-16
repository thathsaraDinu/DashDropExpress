const User = require("./model");
const OTP = require("./modelotp");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

const smtppass = "ffry ydgu obfa ugzf";
const smtpemail = "thathsaradinuwan@gmail.com";

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: "465",
  secure: true,
  auth: {
    user: smtpemail,
    pass: smtppass,
  },
});
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
      return res.status(404).json({ message: "User has not registered" }); // 404 Not Found
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Incorrect password or email" }); // 401 Unauthorized
    }

    const msgotp = await sendOtpVerificationEmail(email);
    if (msgotp === "The OTP has sent to your email") {
      return res
        .status(200)
        .json({ msgotp, message: "passmatch", user: existingUser });
      // 200 OK
    } else {
      return res.status(500).json({ msgotp });
      // 500
    }
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

const sendOtpVerificationEmail = async (email) => {
  try {
    const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
    console.log(otp);
    const mailOptions = {
      from: smtpemail,
      to: email,
      subject: "Verify Your Email",
      html: `<p>Enter <b>${otp}</b> in the app to verify your email address.</p>
      <p> This code expires in <b>1 hour</b></p>`,
    };
    await OTP.deleteMany({ email: email });
    const newotp = new OTP({
      email: email,
      otp: otp,
      createdAt: Date.now(),
      expiresAt: Date.now() + 3600000,
    });

    const savedotp = await newotp.save();
    await transporter.sendMail(mailOptions);

    return "The OTP has sent to your email";
  } catch (error) {
    console.log(error);
    return "Error sending OTP";
  }
};

const verifyOTP = async (req, res) => {
  try {
    let { existingUsername, existingemail, existingusertype, otpmod } =
      req.body;
    console.log(existingUsername);
    console.log(existingemail, existingusertype, otpmod);

    if (!existingemail || !otpmod) {
      console.log("checkpoint1");
      return res
        .status(400)
        .json({ message: "Empty otp details are not allowed" });
    } else {
      console.log("checkpoint2");
      const otpverify = await OTP.find({ email: existingemail });
      if (otpverify.length <= 0) {
        console.log("checkpoint3");
        return res.status(404).json({
          message:
            "Account record does not exist or has been verified already. please sign up or log in",
        });
      } else {
        console.log("checkpoint4");
        const { expiresAt } = otpverify[0];
        const hashedotp = otpverify[0].otp;

        if (expiresAt < Date.now()) {
          console.log("checkpoint5");
          await OTP.deleteMany({ email: existingemail });
          return res
            .status(410)
            .json({ message: "Code has expired. Please request again." });
        } else {
          console.log("checkpoint6");
          const validotp = otpmod === otpverify[0].otp;

          if (!validotp) {
            console.log("checkpoint7", validotp, otpmod, otpverify[0].otp);
            return res
              .status(403)
              .json({ message: "Invalid code passed. Check your inbox." });
          } else {
            console.log("checkpoint8");
            await OTP.deleteMany({ email: existingemail });

            const token = jwt.sign(
              {
                
                usertypetoken: existingusertype,
                username: existingUsername,
                useremail: existingemail,
              },
              JWT_SECRET,
              {
                expiresIn: "1h",
              }
            );
            return res.status(200).json({
              message: "Login successful",
              token,
            });
          }
        }
      }
    }
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while verifying OTP" });
  }
};

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.getUserById = getUserById;
exports.loginUser = loginUser;
exports.verifyOTP = verifyOTP;

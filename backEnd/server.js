const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
const host = "localhost";
const router = require("./UserManagement/router");
const { MONGODB_URI } = require("./config");

app.use(express.json());
app.use(cors());

const uri = MONGODB_URI;
const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("MongoDB error", error);
  }
};

connect();

const server = app.listen(port, host, () => {
  console.log(`Node server is listening to ${server.address().port}`);
});

app.use("/api", router);

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
const host = "localhost";
const router = require("./CustomerManagement/router");
const router2 = require("./DeliveryManagement/router")

app.use(express.json());
app.use(cors());

const uri =
  "mongodb+srv://thathsaradinuwan:Dinuwan@cluster0.67pv9xt.mongodb.net/?retryWrites=true&w=majority";

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
app.use("/api", router2);

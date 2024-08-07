const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");


const router = require("./UserManagement/router");
const router1 = require("./DeliveryManagement/router");
const router2 = require("./Starratings/router");
const ticket = require("./HelpDesk/router")
const vehicle = require("./FleetManagement/router");
const package = require("./PackageManagement/router");
const Orders = require("./OrderManagement/router");

const { MONGODB_URI } = require("./config");

const port = process.env.PORT || 3001; 

const host = port === 3001 ? "localhost" : "0.0.0.0";


app.use(express.json());

app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "100mb" }));

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

app.listen(port, host, (err) => {
  if (err) throw err;
  console.log(`Node server is listening to ${port}`);

});

app.use("/api", router);
app.use("/api", router1);
app.use("/api", router2);
app.use("/api", ticket);
app.use("/api", vehicle);
app.use("/api", package);
app.use("/api", Orders);


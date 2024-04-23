const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
const host = "localhost";
const router = require("./UserManagement/router");
const router1 = require("./DeliveryManagement/router");
const router2 = require("./Starratings/router");
const ticket = require("./HelpDesk/router")
const vehicle = require("./FleetManagement/router");
const package = require("./PackageManagement/router");
const Orders = require("./OrderManagement/router");
const employeeRoutes = require("./PayrollManagement/routes/employee");

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
app.use("/api", router1);
app.use("/api", router2);
app.use("/api", ticket);
app.use("/api", vehicle);
app.use("/api", package);
app.use("/api", Orders);
app.use('/api/employee/', employeeRoutes);


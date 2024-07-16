const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");

// Importing routers
const router = require("./UserManagement/router");
const router1 = require("./DeliveryManagement/router");
const router2 = require("./Starratings/router");
const ticket = require("./HelpDesk/router");
const vehicle = require("./FleetManagement/router");
const packageRouter = require("./PackageManagement/router");
const Orders = require("./OrderManagement/router");

// Importing MongoDB URI from config
const { MONGODB_URI } = require("./config");

// Setting port based on environment variable or defaulting to 3001
const port = process.env.PORT || 3001;

// Setting host based on port
const host = port === 3001 ? "localhost" : "0.0.0.0";

// Middleware
app.use(express.json()); // Replace bodyParser with express.json() for body parsing
app.use(cors()); // Enable CORS for all routes
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true, // Add this option to avoid deprecation warnings
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process on connection error
  }
};

// Call connectDB function to establish MongoDB connection
connectDB();

// Routes
app.use("/api", router);
app.use("/api", router1);
app.use("/api", router2);
app.use("/api", ticket);
app.use("/api", vehicle);
app.use("/api", packageRouter);
app.use("/api", Orders);

// Start server
app.listen(port, host, (err) => {
  if (err) {
    console.error("Server start error:", err);
    process.exit(1); // Exit process on server start error
  }
  console.log(`Node server is listening on http://${host}:${port}`);
});

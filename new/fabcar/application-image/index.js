const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;

// Import all function modules
const enrollUser = require("./auth/enrollUser");
const enrollAdmin = require("./auth/enrollAdmin");
const Simage = require("./Simage");
const query = require("./query");


// Define Express app settings
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.set("title", "Geo Spatial Data Dapp");

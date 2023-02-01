

//setting up a basic express server
const connectDatabase = require("./configuration/db");
const {errorHandler} = require("./middleware/error");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const express = require("express");
const colors = require("colors");

connectDatabase();

const app = express();

//all middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(errorHandler);
app.use("/api/goals", require("./routes/goalRoutes"));

//determining which port we are running our local server on
app.listen(port, () => console.log(`server starting localhost@${port}`));



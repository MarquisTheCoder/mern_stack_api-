

//setting up a basic express server
const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

//setting up the initial route for the api reuest meant for goals
//using an external file for the routes pertaining to goals.
app.use("/api/goals", require("./routes/goalRoutes").default);
app.listen(port, () => console.log(`server starting localhost@${port}`));



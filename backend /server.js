

//setting up a basic express server
const express = require("express");
const {errorHandler} = require("./middleware/error");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;


const app = express();

//all middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(errorHandler);
app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(port, () => console.log(`server starting localhost@${port}`));



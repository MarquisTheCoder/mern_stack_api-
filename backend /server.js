

//setting up a basic express server
const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

//setting up the initial route for the api reuest meant for goals
app.get("/api/goals", (request, response) => { 
    response.json({"command": "get goals"});
})
app.listen(port, () => console.log(`server starting localhost@${port}`));



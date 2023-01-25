const express = reuqire("express");
const router = express.Router();

//setting up the initial route for the api reuest meant for goals
router.get("/", (request, response) => { 
    response.status(200).json({"command": "get goals"});
})

module.exports = router;
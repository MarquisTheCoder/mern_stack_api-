

const express = reuqire("express");

//creating router object to be used in server.js
const router = express.Router();

//setting up the initial route for the api reuest meant for goals
router.get("/", (request, response) => { 
    response.status(200).json({"command": "get goal"});
});

//setting up the creation of current post
router.post("/", (request, response)=> {
    response.status(200).json({"command": "set goal"});
});

//setting up the editing and changing of a particular goal by id
router.put("/:id", (request, response) => {
    response.status(200).json({"command": `change goal ${request.param.id}`});
});

//setting up tje deletion of a [articular goal by id
router.delete("/:id", (request, response) => {
    response.status(200).json({"command" : `delete goal ${request.param.id}`});
});

module.exports = router;
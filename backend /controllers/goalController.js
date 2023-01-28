
//creating a controller class to contain the controller for 
//each route contained in goalRoutes.js 
class GoalController{
    //theses four functions represent the for common utilities of a
    //REST API C.R.U.D( create, read, update, delete)
    getGoals(request, response){
        response.status(200).json({"command" : "get goal"})
    }

    setGoals(request, response){
        response.status(200).json({"command" : "post goal"});
    }

    changeGoal(request, response){
        response.status(200).json({"command": `changing goal ${request.param.id}`});
    }

    deleteGoal(request, response){
        response.status(200).json({"command" : `deleting goal ${request.param.id}`});
    }
}

module.exports =  {
    GoalController,
}

//creating a controller class to contain the controller for 
//each route contained in goalRoutes.js 
const GoalController = {

    //theses four functions represent the for common utilities of a
    //REST API C.R.U.D( create, read, update, delete)
    getGoals : function(request, response){
        response.status(200).json({"command" : "get goal"})
    },

    setGoals : function(request, response){
        response.status(200).json({"command" : "post goal"});
    },

    changeGoal : function(request, response){
        response.status(200).json({"command": `changing goal ${request.param.id}`});
    },

    deleteGoal : function(request, response){
        response.status(200).json({"command" : `deleting goal ${request.param.id}`});
    }
}

export default {
    GoalController,
}

//creating a controller class to contain the controller for 
//each route contained in goalRoutes.js 
class GoalController{

    //theses four functions represent the for common utilities of a
    //REST API C.R.U.D( create, read, update, delete)

    getGoals(request, response){
        if(request.body.text){

            //only outputting the request.bodies text if it actually
            //exist this conditional is there to prevent the attempt
            //of trying to access a null value
            console.log(`text: ${request.body.text}`);
            response.status(200).json({"command" : "get goal"});
        }else{
            console.log(`No request body found`);
            response.status(400).json({"command" : "request body not found"});
        }

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
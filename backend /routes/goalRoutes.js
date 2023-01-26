
const GoalController = require("../controllers/goalController");
const express = reuqire("express");
const router = express.Router();

router.route("/")
    .get(GoalController.getGoals)
    .post(GoalController.setGoals);

router.route("/:id")
    .put(GoalController.setGoals)
    .delete(GoalController.deleteGoals);

module.exports = router;

const {GoalController} = require("../controllers/goalController");
const controller = new GoalController();

const express = require("express");
const router = express.Router();


router.route("/")
    .get(controller.getGoals)
    .post(controller.setGoals);

router.route("/:id")
    .put(controller.setGoals)
    .delete(controller.deleteGoal);

module.exports = router;
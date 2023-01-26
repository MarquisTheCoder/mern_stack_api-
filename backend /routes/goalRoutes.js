
import { getGoals, setGoals, deleteGoals } from "../controllers/goalController";
import { Router } from "express";

const router = Router();

router.route("/")
    .get(getGoals)
    .post(setGoals);

router.route("/:id")
    .put(setGoals)
    .delete(deleteGoals);

export default router;
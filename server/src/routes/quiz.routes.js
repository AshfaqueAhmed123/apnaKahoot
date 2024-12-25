import Router from "express"
const router = Router();
import {
    create,
    getAllQuizzes
} from "../controllers/quiz.controller.js";
import {verifyUser} from "../middlewares/userAuth.middleware.js"

router.route("/create").post(create)
router.route("/:userId/quizes").get(/*verifyUser,*/getAllQuizzes);

export default router
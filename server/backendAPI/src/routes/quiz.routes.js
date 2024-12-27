import Router from "express"
const router = Router();
import {
    create,
    getAllQuizzes,
    deleteQuiz,
    getOneQuiz
} from "../controllers/quiz.controller.js";
import {verifyUser} from "../middlewares/userAuth.middleware.js"

router.route("/create").post(create)
router.route("/:userId/quizes").get(verifyUser,getAllQuizzes);
router.route("/:id").get(verifyUser,getOneQuiz);
router.route("/delete/:id").delete(verifyUser,deleteQuiz);

export default router
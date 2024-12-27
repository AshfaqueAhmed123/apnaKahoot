import Router from "express";
const router = Router();
import {
    create,
    remove,
    getOne,
    getAllQuizQuestions
} from "../controllers/question.controller.js"
import {verifyUser} from "../middlewares/userAuth.middleware.js"

router.route("/").post(verifyUser,create);
router.route("/:id").get(verifyUser,getOne).patch().delete(verifyUser,remove);
router.route("/all/:quizId").get(verifyUser,getAllQuizQuestions);

export default router;
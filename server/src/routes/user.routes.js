import Router from "express"
import {
    register,
} from "../controllers/user.controllers.js"
const router = Router();

router.route("/register").post(register);
router.route("/login").post();
router.route("/logout").post();
router.route("/refreshAccessToken").post();


export default router
import Router from "express"
import {
    register,
    login,
    logout
} from "../controllers/user.controllers.js";
import {verifyUser} from "../middlewares/userAuth.middleware.js"
const router = Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(verifyUser,logout);
router.route("/refreshAccessToken").post();


export default router
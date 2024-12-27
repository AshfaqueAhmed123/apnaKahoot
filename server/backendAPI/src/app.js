import express from 'express';
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extends:true
}));

app.get('/', (req, res) => {
    res.status(200).json({message:"Hello!"})
})

// routes
import userRouter from "./routes/user.routes.js";
import quizRouter from "./routes/quiz.routes.js"
app.use("/user",userRouter);
app.use("/quiz",quizRouter);

export default app


import dotenv from "dotenv"
dotenv.config();
const MAX_NUM = process.env.QUIZPINMAXNUM;
export function generateQuizPIN (){
    return Math.floor(Math.random()*MAX_NUM);
}

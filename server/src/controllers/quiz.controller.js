import { Quiz } from "../models/Quiz.model.js"
import { ApiResponse } from "../utils/ApiResponse.util.js"
import { ApiError } from "../utils/ApiError.utils.js"
import {generateQuizPIN} from "../utils/generateQuizPIN.util.js"

const create = async (req,res) => {
    try {
        const {title,description,owner,questions,maxStudentsAllowed} = req.body;
        if(!title || !description || !owner || !questions || !maxStudentsAllowed){
            return res.status(400).json(
                new ApiError(400,"all fields are required")
            )
        }
        const createdQuiz = await Quiz.create({
            title,
            description,
            owner,
            questions,
            maxStudentsAllowed,
            isJoingQuizAllowd:false,
            isQuizStarted:false,
            quizPIN:generateQuizPIN(),
        });
        if(!createdQuiz){
            return res.status(500).json(
                new ApiError(500,"ubale to create quiz, something went wrong, TRY AGAIN!")
            )
        }
        return res.status(200).json(
            new ApiResponse(200,"Quiz created Successfully", createdQuiz)
        )
    } catch (error) {
        return res.status(error?.status || 500).json(
            new ApiError(error?.status || 500, error?.message)
        )
    }
}

const getAllQuizzes = async (req,res) => {
    try {
        const userId = req.params.userId;
        if(!userId){
            return res.status(400).json(
                new ApiError(400,"userId is required")
            )
        }
        const allQuizzes = await Quiz.find({owner:userId});
        if(!allQuizzes){
            return res.status(500).json(
                new ApiError(500,"something went wrong while fetching data, TRY AGAIN")
            )
        }
        return res.status(200).json(
            new ApiResponse(200,"all quizzes fetched successfully!", allQuizzes)
        )
    } catch (error) {
        return res.status(error?.status || 500).json(
            new ApiError(error?.status || 500,error?.message)
        )   
    }
}

export { create, getAllQuizzes }
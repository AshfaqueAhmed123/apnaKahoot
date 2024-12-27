import {Question} from "../models/question.model.js"
import {Quiz} from "../models/Quiz.model.js"
import {ApiError} from "../utils/ApiError.utils.js"
import {ApiResponse} from "../utils/ApiResponse.util.js"

const create = async (req,res) => {
    try {
        const {question,quiz,answers,correctAnswer,timing} = req.body;
        if(!question || !quiz || !answers || !correctAnswer || !timing){
            return res.status(400).json(
                new ApiError(400,"all fields are required")
            )
        }
        const doQuizExixsts = await Quiz.findById(quiz);
        if(!doQuizExixsts){
            return res.status(404).json(
                new ApiError(404, "quiz don't exists")
            )
        }
        const createdQuestion = await Question.create({
            question,
            quiz,
            answers,
            correctAnswer,
            timing
        });
        if(!createdQuestion){
            return res.status(500).json(
                new ApiError(500, "something went wrong while creating question")
            )
        };
        return res.status(200).json(
            new ApiResponse(200, "question created successfully", createdQuestion)
        )
    } catch (error) {
        return res.status(error?.status || 500).json(
            new ApiError(500,error?.message)
        )
    }
}

const remove = async (req,res) => {
    try {
        const questionId = req.params.id;
        if(!questionId){
            return res.status(400).json(
                new ApiError(400,"question id is required")
            )
        }
        const isDeleted = await Question.findByIdAndDelete(questionId);
        if(!isDeleted){
            return res.status(500).json(
                new ApiError(500,"something went wrong while deleting question, TRY AGAIN!")
            )
        }
        return res.status(200).json(
            new ApiResponse(200,"question deleted successfully!")
        )
    } catch (error) {
        return res.status(error?.status || 500).json(
            new ApiError(500,error?.message)
        )
    }
}

const getOne = async (req,res) => {
    try {
        const questionId = req.params.id;
        if(!questionId){
            return res.status(400).json(
                new ApiError(400,"question id is required")
            )
        }
        const question = await Question.findById(questionId);
        if(!question){
            return res.status(404).json(
                new ApiError(404,"question do not exixts!")
            )
        }
        return res.status(200).json(
            new ApiResponse(200,"question fetched sucessfully!",question)
        )
    } catch (error) {
        return res.status(error?.status || 500).json(
            new ApiError(500,error?.message)
        )
    }
}

const getAllQuizQuestions = async (req,res) => {
    try {
        const quizId = req.params.quizId;
        if(!quizId){
            return res.status(400).json(
                new ApiError(400,"quiz id is required")
            )
        }
        const doQuizExists = await Quiz.findById(quizId);
        if(!doQuizExists){
            return res.status(404).json(
                new ApiError(404, "Quiz do not exists")
            )
        }
        const questions = await Question.find({quiz:quizId});
        if(!questions){
            return res.status(404).json(
                new ApiError(404,"no questions found")
            )
        }
        return res.status(200).json(
            new ApiResponse(200, "all questions fetched successfully!", questions)
        )
    } catch (error) {
        return res.status(error?.status || 500).json(
            new ApiError(500,error?.message)
        ) 
    }
}

export {create,remove,getOne,getAllQuizQuestions}
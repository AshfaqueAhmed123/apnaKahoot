import {User} from "../models/user.model.js"
import {ApiResponse} from "../utils/ApiResponse.util.js"
import {ApiError} from "../utils/ApiError.utils.js"

const register = async (req,res) => {
    try {
        const {fullName,email,password} = req.body;
        if(!fullName || !email || !password){
            return res.status(400).json(
                new ApiError(400,"All fields are required")
            )
        }
        const existringUserWithSameEmail = await User.findOne({email})
        if(existringUserWithSameEmail){
            return res.status(400).json(
                new ApiError(400,"user already exixts with same email")
            )
        }
        const createdUser = await User.create({
            fullName,
            email,
            password,
            quizes:[],
        })
        if(!createdUser){
            return res.status(500).json(
                new ApiError(500, "unable to created user, something went wrong, TRY AGAIN!")
            )
        }
        return res.status(200).json(
            new ApiResponse(200,"user created successfully")
        )
    } catch (error) {
        return res.status(error?.status || 500).json(
            new ApiError(error?.status || 500,error?.message)
        )
    }
}

export {register}
import {User} from "../models/user.model.js"
import {ApiResponse} from "../utils/ApiResponse.util.js"
import {ApiError} from "../utils/ApiError.utils.js"


const generateAccessAndRefereshTokens = async (userId) => {
    try {
      const user = await User.findById(userId);
      const accessToken = user.generateAccessToken();
      const refreshToken = user.generateRefreshToken();
  
      user.refreshToken = refreshToken;
      await user.save({ validateBeforeSave: false });
  
      return { accessToken, refreshToken };
    } catch (error) {
      console.log(error);
    }
  };

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

const login = async (req, res) => {
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json(
                new ApiError(400,"email and password are required!")
            )
        }
        const userExists = await User.findOne({email});
        if(!userExists){
            return res.status(404).json(
                new ApiError(404,"invalid email or password")
            )
        }
        const isPasswordCorrect = userExists.password == password;
        if(!isPasswordCorrect){
            return res.status(400).json(
                new ApiError(400,"invalid email or password")
            )
        } 
        const {accessToken,refreshToken} = await generateAccessAndRefereshTokens(userExists?._id);

        return res.status(200).json(
            new ApiResponse(200,"user logged in sucessfully",[{"accessToken":accessToken,"refreshToken":refreshToken}])
        )
    } catch (error) {
        return res.status(error?.status || 500).json(
            new ApiError(error?.status || 500, error?.message)
        )
    }
}

const logout = async (req, res) => {
    try {
        const userId = req?.user._id;
        if(!userId){
            return res.status(500).json(
                new ApiError(500,"something went wrong, while logging out!")
            )
        }
        const LoggedInUser = await User.findById(userId);
        LoggedInUser.refreshToken = undefined;
        const isUserLoggedOut = await LoggedInUser.save({validateBeforeSave:false});
        if(!isUserLoggedOut){
            return res.status(500).json(
                new ApiError(500,"something went wrong, while logging out!")
            )
        }
        return res.status(200).json(
            new ApiResponse(200, "user logged out successfully!")
        )
    } catch (error) {
        return res.status(error?.status || 500).json(
            new ApiError(error?.status || 500, error?.message)
        )
    }
}

export {register,login,logout}
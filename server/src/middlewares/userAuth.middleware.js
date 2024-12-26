import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.utils.js";
import jwt from "jsonwebtoken";

export const verifyUser = async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
      
    if (!token) {
      return res.status(401).json(new ApiError(401, "unauthorized request"));
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(400).json(new ApiError(400, error.message));
  }
};

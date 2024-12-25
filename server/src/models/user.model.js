import mongoose, { Schema, model } from "mongoose";
// import bcrypt from "bcryptjs" // TODO : install bcryptjs package
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config();

const userSchmea = new Schema({
    fullName: {
        type: String,
        min: 3,
        max: 100,
        required: true,
    },
    email: {
        type: String,
        max: 100,
        required: true,
    },
    password: {
        type: String,
        min: 6,
        max: 16,
        required: true,
    },
    quizes: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Quiz",
        }
    ],
    refreshToken: {
        type: String,
    },
}, {
    timestamps: true
});


userSchmea.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchmea.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchmea.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchmea.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id,

        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


export const User = model('User', userSchmea);
import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
    fullName:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    quizes:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Quiz"
    },
    refreshToken:{
        type:String,
    },
},{
    timestamps:true
});

export const User = model("User", userSchema);
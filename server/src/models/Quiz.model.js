import mongoose,{Schema,model}from "mongoose";

const quizSchmea = new Schema({
    title: {
        type:String,
        min:5,
        max:250,
        required:true,
    },
    description: {
        type:String,
        required:true,
    },
    owner: {
        // type:mongoose.SchemaTypes.ObjectId,
        type:mongoose.Types.ObjectId,
        ref:"User",
    },
    questions: [{
        // type:mongoose.SchemaTypes.ObjectId,
        type:mongoose.Types.ObjectId,
        ref:"Question",
    }],
    maxStudentsAllowed: {
        type:Number,
        required:true,
    },
    isJoingQuizAllowd: {
        type:Boolean,
    },
    isQuizStarted: {
        type:Boolean,
    },
    quizResult: [
        {
            type:Array,
        }
    ],
    quizWinners: [
        {
            type:Array,
        }
    ],
    quizPIN:{
        type:Number,
    }
},{
    timestamps:true,
});

export const Quiz = model("Quiz",quizSchmea);
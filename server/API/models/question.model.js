import mongoose,{Schema,model} from "mongoose"

const questionSchema = new Schema({
    parentQuiz:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Quiz"
    },
    questionText:{
        type:String,
        required:true
    },
    answerOptions:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Answer"
    }],
    correctAnswer:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Asnwer"
    },
    timing:{
        type:Number,
        required:true
    },
    points:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})

export const Question = model("Question", questionSchema)
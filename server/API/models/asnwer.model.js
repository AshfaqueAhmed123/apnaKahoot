import mongoose, {Schema, model} from "mongoose"

const answerSchema = new Schema({
    question:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Question"
    },
    asnwerText:{
        type:String,
        required:true
    },
    asnwerShape:{
        type:String,
        required:true
    },
    asnwerColor:{
        type:String,
        required:true
    },
    isCorrect:{
        type:Boolean,
        required:true
    }
},{
    timestamps:true
})

export const Answer = model("Asnwer", answerSchema)
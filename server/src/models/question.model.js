import mongoose,{Schema,model} from "mongoose";

const questionSchema = new Schema({
    question:{
        type:String,
        required:true,
    },
    quiz:{
        // type:mongoose.SchemaTypes.ObjectId
        type:mongoose.Types.ObjectId,
        ref:"Quiz",
    },
    answers:{
        type:Array,
        required:true,
    },
    correctAnswer:{
        type:Number,
        required:true,
    },
    timing:{
        type:Number,
        required:true,
    },
},{
    timestamps:true,
});

export const Question = model("Question",questionSchema);
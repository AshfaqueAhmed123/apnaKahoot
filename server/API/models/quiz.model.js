import mongoose, {Schema, model} from "mongoose"

const quizSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    pin:{
        type:Number,
        required:true
    },
    questions:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Question"
    },
    participatants:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Participatant"
    },
    maxParticipatantsAllowed:{
        type:Number,
        required:true
    },
    isParticipatingAllowed:{
        type:Boolean,
        required:true
    },
    result:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Result"
    },
},{
    timestamps:true
});

export const Quiz = model("Quiz", quizSchema);
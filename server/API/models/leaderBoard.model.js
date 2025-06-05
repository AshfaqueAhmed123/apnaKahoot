import mongoose, { Schema } from "mongoose";

const leaderBoardSchema = new Schema({
    question:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Question"
    },
    participatants:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Participatant"
    }],
    participatantsResult:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Result"
    }],
},{
    timestamps:true
});

export const LeaderBoard = model("LeaderBoard", leaderBoardSchema)
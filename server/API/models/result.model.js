import mongoose,{Schema,model} from "mongoose"

const resultSchema = new Schema({

},{
    timestamps:true
})

export const Result = model("Result",resultSchema)
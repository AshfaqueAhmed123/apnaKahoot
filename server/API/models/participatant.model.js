import mongoose , {Schema,model} from "mongoose"

const participatantSchema = new Schema({
    nickName:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        required:true
    },
},{
    timestamps:true
})

export const Participatant = model("Participatant",participatantSchema)
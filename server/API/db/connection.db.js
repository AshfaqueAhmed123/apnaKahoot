import mongoose from "mongoose";

const connectDB = async (db_uri,db_name) => {
    try {
        const instance = await mongoose.connect(`${db_uri}/${db_name}`)
        if(!instance){
            console.log("error connecting database");
        }
        console.log(`db sucessfully connected at ${instance.connection.name}`);
    } catch (error) {
        console.error(error);
    }
}

export default connectDB
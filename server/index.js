import dotenv from "dotenv";
dotenv.config();
import app from "./src/app.js"
import { connectDB } from "./src/db/db.connection.js"
const PORT = process.env.PORT;

connectDB()
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
    })
    .catch((error) => {
        console.log(error);
    })
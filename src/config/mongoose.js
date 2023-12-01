import mongoose from "mongoose";
import enviroment from "./dotenv.js"

const dbConnect = async() => {

    try {

       await mongoose.connect(enviroment.MONGO_DB_URL);
       console.log("Connection Successfull");
        
    } catch (err) { console.log("Connection Failed!") }

}

export default dbConnect;
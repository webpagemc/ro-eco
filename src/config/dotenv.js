import dotenv from "dotenv";

dotenv.config();

const enviroment = {

    PORT:process.env.PORT,
    MONGO_DB_URL:process.env.MONGO_DB_URL

}

export default enviroment;
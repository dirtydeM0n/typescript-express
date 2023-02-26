import * as dotenv from "dotenv"
// initialize configuration
dotenv.config();

const envVars = {
    PORT: process.env.SERVER_PORT
}
export default envVars;
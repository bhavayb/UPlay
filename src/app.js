import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true // allow cookies to be sent
}));

app.use(express.json({limit: '16kb'})); // for parsing application/json // we use this to parse json data in request body so that server dont crash, we set limit to 16kb
app.use(express.urlencoded({ extended: true, limit: '16kb' })); // for parsing application/x-www-form-urlencoded
app.use(express.static("public")); // to serve static files from public folder
app.use(cookieParser()); // to parse cookies from the request headers



export {app}; // export default app
import express from "express";
import cors from "cors";
import helmet from "helmet";
import router from "./routes";
import { connect } from "../src/utils/connect.db";
import path from "path";
import cookieParser from "cookie-parser";

import dotenv from "dotenv";
import { globalLimiter } from "./middlewares/rateLimitter";
dotenv.config();

//app instance
const app = express();

//connect to DB
connect();

//middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//pass the app to the router function
router(app);


export default app;

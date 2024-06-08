import express from "express";
import cors from "cors";
import helmet from "helmet";
import router from "./router";
import { connect } from "./utils/connect.db";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
//app instance
export const app = express();
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

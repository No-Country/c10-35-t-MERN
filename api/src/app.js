import express from "express";
import morgan from "morgan";
import cors from "cors";
import { PORT } from "./config/config.js";

const app = express();

app.set("port", PORT);

app.use(morgan("dev"));
app.use(cors());

export default app;

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import {
  userRouter,
  categoryRouter,
  postRouter,
  replyRouter,
  chatRouter,
} from "./routes";
import { responseHandler, errorHandler } from "./middlewares";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// 실험 페이지
app.get("/", (req, res) => {
  res.send("<h1>백엔드 페이지!!<h1>");
});

app.use("/api", userRouter);
app.use("/api", categoryRouter);
app.use("/api", postRouter);
app.use("/api", replyRouter);
app.use("/api", chatRouter);

app.use(responseHandler);
app.use(errorHandler);

export { app };

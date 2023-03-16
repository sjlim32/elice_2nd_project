import express from "express";
import { categoryRouter, postRouter } from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use("/", indexRouter);
app.use("/api", categoryRouter);
app.use("/api", postRouter);

// 실험 페이지
app.get("/", (req, res) => {
  res.send("<h1>백엔드 페이지<h1>");
});

export { app };

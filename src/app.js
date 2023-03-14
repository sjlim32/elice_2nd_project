import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use("/", indexRouter);

// 실험 페이지
app.get("/", (req, res) => {
  res.send("<h1>백엔드 페이지<h1>");
});

export { app };

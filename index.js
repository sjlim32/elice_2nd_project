import dotenv from "dotenv";
import mongoose from "mongoose";
import http from "http";
import { Server } from "socket.io";
import { app, server } from "./src/app";

// 환경변수 사용
dotenv.config();
const port = process.env.SERVER_PORT;

app.set("port", process.env.PORT || 8080);

// DB 만들고 연결할 주소
mongoose.connect(process.env.DB_URL);

mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected");
});
mongoose.connection.on("error", () => {
  console.error("MongoDB Connect Failed");
});

app.listen(port, () => {
  console.log(`${port}번 포트에서 대기중 🚀`);
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", socket => {
  socket.on("send_msg", data => {
    socket.to(data.roomNumber).emit("receive_message", data.log);
  });
  socket.on("leave_room", data => {
    socket.leave(data);
  });
  socket.on("join_room", data => {
    socket.join(data);
  });
});

io.on("disconnect", socket => {});

server.listen(5000, () => {
  console.log("server is running on port 5000");
});

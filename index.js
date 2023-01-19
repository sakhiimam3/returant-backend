import express from "express";
import dotenv from "dotenv";
import Connection from "./config/db.js";
import Routes from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
import { Server } from "socket.io";
import http from "http";

dotenv.config();
const port = process.env.PORT || 8000;

const app = express();
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
const io = new Server(server, {
  cors: { origin: "*" },
});
let onlineUsers = [];

const addNewUser = (username, socketId) => {
  !onlineUsers.some((user) => user.username === username) &&
    onlineUsers.push({ username, socketId });
};

const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};

const getUser = (username) => {
  return onlineUsers.find((user) => user.username === username);
};
io.on("connection", (socket) => {
  socket.on("newUser", (username) => {
    addNewUser(username, socket.id);
  });

  socket.on("sendNotification", ({ senderName, email, phone, message }) => {
    // const receiver = getUser(receiverName);
    // console.log(receiver?.socketId);
    io.emit("getNotification", {
      senderName,
      email,
      phone,
      message,
    });
    // io.to(receiver?.socketId).emit("getNotification", {
    //   senderName,
    //   type,
    // });
  });
  socket.on("sendText", async ({ senderName, receiverName, text }) => {
    const receiver = await getUser(senderName);
    io.to(receiver?.socketId).emit("getText", {
      senderName,
      text,
    });
  });
  socket.on("disconnect", () => {
    removeUser(socket.id);
  });
});
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

Connection();

app.use("/", Routes);

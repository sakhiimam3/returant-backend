import express from "express";
import dotenv from "dotenv";
import Connection from "./config/db.js";
import Routes from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
import http from "http";

dotenv.config();
const port = process.env.PORT || 8000;
const app = express();
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

Connection();

app.use("/", Routes);

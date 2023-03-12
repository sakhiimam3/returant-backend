const express = require("express");
const dotenv = require("dotenv");
const Connection = require("./config/db.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");
const Routes = require("./routes/route.js");
const path = require("path");

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
// Serve uploaded files from the "upload" directory
// Serve uploaded files from the "upload" directory
app.use("/upload", express.static(path.join(__dirname, "upload")));

app.use("/", Routes);

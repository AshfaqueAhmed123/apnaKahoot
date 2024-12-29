const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

require("dotenv").config();

const PORT = process.env.PORT;

io.on("connection", (socket) => {
  console.log("socket connected ", socket.id);
});

server.listen(PORT, () => {
  console.log(`server is running at PORT ${PORT} ...`);
});

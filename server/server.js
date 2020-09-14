// Main starting point of the application
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const router = require("./router");
const mongoose = require("mongoose");

// DB Setup
// mongoose.connect("mongodb://localhost/auth");
mongoose.connect("mongodb://localhost:27017/auth-example", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// App Setup - Get express working
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));
router(app);

// Server Setup - Get express to talk to the outside world
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on: " + port);

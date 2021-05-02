// importing express module for routing
var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000
  bodyParser = require("body-parser");

var todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// adding files
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile("index.html");
});

// own routes
app.use("/api/todos", todoRoutes);

// listening to server
app.listen(port, function () {
  console.log("App is running on Port " + port);
});

var mongoose = require("mongoose");
mongoose.set("debug", true);

// connecting to db using mongoose
mongoose
  .connect("mongodb://localhost/todo-api", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
  });

// to use promises
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");

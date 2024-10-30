const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then((data) => {
    console.log("connection established succesfully.");
  })
  .catch((err) => {
    console.log(
      "There was something that went wrong while trying to connect to the database"
    );
  });

const todoScheme = new mongoose.Schema({
  title: String,
  description: String,
});

const Todo = mongoose.model("Todo", todoScheme);

module.exports = Todo;

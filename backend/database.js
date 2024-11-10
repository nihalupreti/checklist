const mongoose = require("mongoose");
const { date } = require("zod");

mongoose
  .connect(process.env.MONGO_URI)
  .then((data) => {
    console.log("connection established succesfully.");
  })
  .catch((err) => {
    console.log(
      "There was something that went wrong while trying to connect to the database" +
        err
    );
  });

const todoScheme = new mongoose.Schema({
  title: String,
  due: Date,
  status: Boolean,
});

const Todo = mongoose.model("Todo", todoScheme);

module.exports = Todo;

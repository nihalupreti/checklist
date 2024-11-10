const { Router } = require("express");
const Todo = require("./database.js");
const router = Router();

router.get("/todos", (req, res) => {
  Todo.find()
    .then((data) => {
      console.log("sucessfully fetched the todos.");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log("couldnot fetch the todos.");
      res.status(400).json({ message: "try again" });
    });
});

router.post("/todo", (req, res) => {
  const title = req.body["title"];
  const due = req.body["due"];
  const status = req.body["status"];

  const todo = new Todo({ title: title, due: due, status: status });
  todo
    .save()
    .then((data) => {
      console.log("sucessfully saved the todo.");
      res.status(200).json({ id: data._id });
    })
    .catch((err) => {
      console.log("could not save the todos.");
      res.status(400).json({
        message: "something went wrong while trying to save to the database",
      });
    });
});

module.exports = router;

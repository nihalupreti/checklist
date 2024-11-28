const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const express = require("express");
const router = require("./todos.js");
const cors = require("cors");
const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", router);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3000, () => {
  console.log("listining at port 3000");
});

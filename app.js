const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true });
let db = mongoose.connection;
db.once("open", () => {
  console.log("db is connected.");
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

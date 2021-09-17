const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true });
let db = mongoose.connection;
db.once("open", () => {
  console.log("db is connected.");
});

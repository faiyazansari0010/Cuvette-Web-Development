const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Project")
  .then(() => {
    console.log("Connection established with Database");
  })
  .catch((err) => {
    console.log((err) => {
      console.log(`Error connecting to database - ${err}`);
    });
  });

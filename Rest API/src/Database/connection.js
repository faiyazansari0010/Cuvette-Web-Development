const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Careerpedia")
  .then(() => {
    console.log("Database connected successfully !");
  })
  .catch((err) => {
    console.log(`No connection, ERROR - ${err}`);
  });

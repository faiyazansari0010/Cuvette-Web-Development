const express = require("express");
const app = express();

const router = express.Router();

app.use((req, res, next) => {
  console.log(`Request method used - ${req.method}`);
  console.log(`${req.url}`)
  next();
})

router.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>")
})

router.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>")
})

app.use("/", router);

app.listen(7000,() =>{
  console.log("Server running on port 7000");
})
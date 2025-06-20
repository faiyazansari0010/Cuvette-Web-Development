const express = require("express");
const app = express();
const port = process.env.PORT || 4000
const workoutRoutes = require("./routes/workoutRoutes")
const userRoutes = require("./routes/userRoutes")
const cors = require("cors")
require("dotenv").config();
require("./database/connection")
app.use(express.json())
app.use(cors())

app.use("/workouts", workoutRoutes)
app.use("/user", userRoutes)

app.listen(port, () => {
  console.log(`Server running on port : ${port}`)
})
const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  name:String,
  phone:Number,
  tech:String,
  exp:Number
})

const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;
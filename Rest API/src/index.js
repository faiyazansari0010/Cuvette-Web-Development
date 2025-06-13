const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
require("./Database/connection");

const Mentor = require("./Models/mentorModel");

app.post("/api/mentors", async (req, res) => {
  try {
    const mentor = new Mentor(req.body);
    const mentorData = await mentor.save();
    res.send(mentorData);
  } catch (err) {
    console.log(err);
  }
});

app.get("/api/mentors", async (req, res) => {
  const mentorData = await Mentor.find();
  res.send(mentorData);
});

app.get("/api/mentors/:id", async (req, res) => {
  const id = req.params.id;
  const mentorData = await Mentor.find({ _id: id });
  res.send(mentorData);
});

app.patch("/api/mentors/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = await Mentor.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send(updatedData);
  } catch (err) {
    console.log(err);
  }
});

app.delete("/api/mentors/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedData = await Mentor.findByIdAndDelete({ _id: id });
    res.send(deletedData);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running at PORT : ${port}`);
});

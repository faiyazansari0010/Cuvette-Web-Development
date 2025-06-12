const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

const data = {
  name: "Faiyaz",
  age: 24,
  school: "Sunrise EMS"
}

app.get('/', (req, res) => {
  res.json({ message: "GET request successful", data });
});

app.post('/', (req, res) => {
  const { name, age, school } = req.body;
  data = { name, age, school };
  res.json({ message: "POST request successful - Data updated", data });
});

app.put('/', (req, res) => {
  const { key, value } = req.body;
  data[key] = value;

  res.json({ message: `PUT request successful - '${key}' updated`, data });
});

app.delete('/', (req, res) => {
  const { key } = req.body;

  delete data[key];
  res.json({ message: `DELETE request successful - '${key}' removed`, data });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
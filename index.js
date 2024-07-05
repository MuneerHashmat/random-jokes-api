const express = require("express");
const app = express();
const jokes = require("./jokes");

app.get("/random_joke", (req, res) => {
  const idx = Math.floor(Math.random() * jokes.length);
  return res.status(200).json(jokes[idx]);
});

app.listen(10000, () => {
  console.log("Server is running on port 10000");
});

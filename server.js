const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname)));

app.get("/roll", (req, res) => {
  const value = Math.floor(Math.random() * 6) + 1;
  res.json({ value });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

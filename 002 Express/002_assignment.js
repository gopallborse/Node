const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log("/users");
  res.send("<p>/users</p>");
});

app.use("/", (req, res, next) => {
  console.log("/");
  res.send("<p>/</p>");
});

app.listen(3000);

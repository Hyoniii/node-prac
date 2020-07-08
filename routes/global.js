const express = require("express");

const globalRoute = express.Router();

globalRoute.get("/", (req, res, next) => {
  res.send("index");
});

globalRoute.get("/index", (req, res, next) => {
  res.send("index2");
});

module.exports = globalRoute;

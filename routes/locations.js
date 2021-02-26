const express = require("express");
const location = express.Router();

let database = [
  { id: 1, latitude: 60, longitude: 70 },
  { id: 2, latitude: 40, longitude: 80 }
];

location.get("/locations", (req, res) => {
  res.json(database);
});

location.get("/locations/1", (req, res) => {
  res.json(database[0]);
});

module.exports = location;

const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;
const locationsrouter = express.Router();
const location = express.Router();

let database = [
  { id: 1, latitude: 60, longitude: 70 },
  { id: 2, latitude: 40, longitude: 80 }
];

locationsrouter.get("/location", (req, res) => {
  res.send("router");
});

location.get("/locations", (req, res) => {
  res.json(database);
});

location.get("/locations/1", (req, res) => {
  res.json(database[0]);
});

app.use("/router", locationsrouter);
app.use("/api", location);

app.use(express.static("public"));

/* app.use("/hello", (req, res, next) => {
  console.log("hello");
  next();
});
app.use("/world", (req, res, next) => {
  console.log("world");
  next();
}); */

app.listen(PORT, () => console.log(`Server started running on port ${PORT}`));

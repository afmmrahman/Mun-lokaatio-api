const express = require("express");
const location = require("./routes/locations");
const app = express();

const PORT = process.env.PORT || 8080;
const locationsrouter = express.Router();

locationsrouter.get("/location", (req, res) => {
  res.send("router");
});

app.use(express.static("public"));

app.use("/router", locationsrouter);
app.use("/api", location);

/* app.use("/hello", (req, res, next) => {
  console.log("hello");
  next();
});
app.use("/world", (req, res, next) => {
  console.log("world");
  next();
}); */

app.listen(PORT, () => console.log(`Server started running on port ${PORT}`));

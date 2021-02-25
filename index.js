const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

let database = [
  { id: 1, latitude: 60, longitude: 70 },
  { id: 2, latitude: 40, longitude: 80 }
];

app.use(express.static("public"));

app.get("/api/locations", (req, res) => {
  res.json(JSON.stringify(database, null, 4));
});

app.listen(PORT, () => console.log(`Server started running on port ${PORT}`));

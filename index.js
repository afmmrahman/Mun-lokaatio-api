const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

/* app.get("/", (req, res) => {
  res.send("Hello World");
}); */

app.listen(PORT, () => console.log(`Server started running on port ${PORT}`));

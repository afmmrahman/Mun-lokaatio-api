const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "Tareq",
  password: "PASSWORD",
  database: "locations"
});

// You may omit this
connection.connect();

connection.query("select * from locations", (err, locations) => {
  if (err) {
    throw err;
  }
  locations.forEach(loc => console.log(loc));
});

// will wait if previously enqueued queries
connection.end();

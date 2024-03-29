const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "database",
  user: "root",
  password: "zuheb101625",
  database: "signup",
});

app.post("/signup", (req, res) => {
  const sql = "INSERT INTO login (name, email, password) VALUES (?)";
  //   const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES ('" + req.body.name + "', '" + req.body.email + "', '" + req.body.password + "')";
  const values = [req.body.name, req.body.email, req.body.password];

  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE email = ? AND password = ?";

  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json("Login Success");
    } else {
      return res.json("Failed");
    }
  });
});

app.listen(8801, () => {
  console.log("running server");
});

import express from "express";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
});

app.use(express)

app.use(express.json());

app.get("/", (req, res) => {
  res.json(data);
});

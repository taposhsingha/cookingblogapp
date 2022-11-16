import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "cookingblog",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("hello");
});

app.post("/blogs", (req, res) => {
  const q =
    "INSERT INTO blogs (`blog_name`,`blog_desc`,`blog_created_at`,`blog_author`,`blog_img`,`user_id`) VALUES (?)";
  const values = [
    req.body.blog_name,
    req.body.blog_desc,
    req.body.blog_created_at,
    req.body.blog_author,
    req.body.blog_img,
    req.body.user_id,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.send(data);
  });
});

app.get("/blogs", (req, res) => {
  const q = "SELECT * FROM blogs";
  db.query(q, (err, data) => {
    res.send(data);
  });
});

app.listen(8800, () => {
  console.log("Connected to backend!");
});

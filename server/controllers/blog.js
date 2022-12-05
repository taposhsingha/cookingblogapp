import { db } from "../db.js";
export const getBlogs = (req, res) => {
  const q = req.query.blog_cat
    ? "SELECT * FROM blogs WHERE blog_cat?"
    : "SELECT * FROM blogs";

  db.query(q, [req.query.blog_cat], (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};

export const getBlog = (req, res) => {
  res.json("from controller");
};

export const addBlog = (req, res) => {
  res.json("from controller");
};

export const deleteBlog = (req, res) => {
  res.json("from controller");
};

export const updateBlog = (req, res) => {
  res.json("from controller");
};

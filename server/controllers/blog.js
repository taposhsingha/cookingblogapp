import { db } from "../db.js";
export const getBlogs = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM blogs WHERE blog_category=?"
    : "SELECT * FROM blogs";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};

export const getBlog = (req, res) => {
  const q =
    "SELECT `user_name`,`blog_name`,`user_img`,`blog_desc`,`blog_img`,`blog_category`,`blog_created_at` FROM users u JOIN blogs b ON u.user_id=b.user_id WHERE b.blog_id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data[0]);
  });
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

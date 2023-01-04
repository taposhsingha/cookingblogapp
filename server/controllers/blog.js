import { db } from "../db.js";
import jwt from "jsonwebtoken";
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
    "SELECT b.blog_id, `user_name`,`blog_name`,`user_img`,`blog_desc`,`blog_img`,`blog_category`,`blog_created_at` FROM users u JOIN blogs b ON u.user_id=b.user_id WHERE b.blog_id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addBlog = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("NOT authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO blogs(`blog_name`,`blog_desc`,`blog_category`,`blog_img`,`blog_created_at`,`user_id`) VALUES (?)";
    const values = [
      req.body.blog_name,
      req.body.blog_desc,
      req.body.blog_category,
      req.body.blog_img,
      req.body.blog_created_at,
      userInfo.id,
    ];

    db.query(q, [values], (err, data) => {
      if (err) console.log(err);
      return res.json("Post has been created");
    });
  });
};

export const deleteBlog = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("NOT authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const blogId = req.params.id;

    const q = "DELETE FROM blogs WHERE `blog_id`=? AND `user_id`=?";

    db.query(q, [blogId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json("You can only delete your post!");

      return res.json("Post has been deleted!");
    });
  });
};

export const updateBlog = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("NOT authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");
    const blogId = req.params.id;
    const q =
      "UPDATE blogs SET `blog_name`=?,`blog_desc`=?,`blog_img`=?,`blog_category`=? WHERE `blog_id`=? AND `user_id`=?";
    const values = [
      req.body.blog_name,
      req.body.blog_desc,
      req.body.blog_img,
      req.body.blog_category,
    ];

    db.query(q, [...values, blogId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      console.log(res);
      return res.json("Post has been updated.");
    });
  });
};

import { db } from "../db.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
  const q = "SELECT * FROM users WHERE user_email=? OR user_name=?";

  db.query(q, [req.
    body.user_email, req.body.user_name], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User already exists!");

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.user_password, salt);

    const q =
      "INSERT INTO users(`user_name`,`user_email`,`user_password`) VALUES (?)";
    const values = [req.body.user_name, req.body.user_email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};

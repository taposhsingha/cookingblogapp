import express from "express";
import mysql from "mysql";
import blogRoutes from "./routes/blogs.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());


app.use("/api/blogs", blogRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.json("hello");
});

app.listen(8800, () => {
  console.log("Connected to backend!");
});

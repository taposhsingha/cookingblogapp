import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Blogs from "./pages/blogs/Blogs";
import CreateBlog from "./pages/createblog/CreateBlog";
import SingleBlog from "./pages/singleBlog/SingleBlog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/createblog" element={<CreateBlog />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

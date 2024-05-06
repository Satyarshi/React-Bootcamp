import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Globe from "./components/Globe";
import Header from "./components/Header";
import Home from "./components/Home";
import CreateBlog from "./components/CreateBlog";
import ShowBlog from "./components/ShowBlog";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createblog" element={<CreateBlog />} />
        <Route path="/showblog" element={<ShowBlog />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/globe" element={<Globe />} />
      </Routes>
    </>
  );
};

export default App;

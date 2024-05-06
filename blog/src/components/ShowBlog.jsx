import React, { useState, useEffect } from "react";
import supabase from "./Supabase.jsx";
const ShowBlog = () => {
  const [blogs, setBlog] = useState([]);
  useEffect(() => {
    getBlogs();
  }, []);

  async function getBlogs() {
    const { data } = await supabase.from("blogs").select();
    setBlog(data);
  }
  return (
    <ul>
      {blogs.map((blog) => (
        <li key={blog.id}>{blog.title}</li>
      ))}
    </ul>
  );
};

export default ShowBlog;

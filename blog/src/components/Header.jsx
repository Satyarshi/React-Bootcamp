import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="my-5 flex max-w-screen-lg mx-auto">
      <Link to="/home" className="mr-4">
        Home
      </Link>
      <Link to="/globe" className="mr-4">
        Globe
      </Link>
      <Link to="/about" className="mr-4">
        About
      </Link>
      <Link to="/contact" className="mr-4">
        Contact
      </Link>
      <Link to="/createblog" className="mr-4">
        Create Blog
      </Link>
      <Link to="/showblog" className="mr-4">
        Show Blog
      </Link>
    </div>
  );
};

export default Header;

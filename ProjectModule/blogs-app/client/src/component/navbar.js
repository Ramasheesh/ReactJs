import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav
      className="border-b-4 border-b-cyan-400 text-center fixed-top-0
     bg-gray-900 font-full w-full text-lg text-teal-50">
      <ul>
        <li className="inline-block py-4">
          <Link to="/" className="pl-6 pr-6">Home</Link>
        </li>
          <li className="inline-block py-4">
        <Link to="/about" className="pl-6 pr-6">About</Link>
        </li>
        <li className="inline-block py-4">
          <Link to="/article" className="pl-6 pr-6">Article</Link>
        </li>
        <li className="inline-block py-4">
          <Link to="/article-list" className="pl-6 pr-6">ArticleList</Link>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BlogsComp from "../components/Blogs/BlogsComp";

const BlogsDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const blogData = location.state;

  // If no state is passed, redirect or show fallback
  React.useEffect(() => {
    if (!blogData) {
      navigate("/blogs"); // or show an error/fallback UI
    }
  }, [blogData, navigate]);

  if (!blogData) return null; // or return a loading/error component

  const { image, date, title, description, author } = blogData;

  return (
    <div className="pt-20">
      <div className="h-[300px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="mx-auto h-[300px] w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>
      <div className="container">
        <p className="text-slate-600 text-sm py-3">
          written by {author} on {date}
        </p>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p>{description}</p>
      </div>

      {/* All Blogs Section */}
      <BlogsComp />
    </div>
  );
};

export default BlogsDetails;

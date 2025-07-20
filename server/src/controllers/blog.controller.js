const Blog = require("../models/blog.model");

// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single blog by slug
exports.getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug, status: "published" });
    if (!blog) return res.status(404).json({ message: "Blog not found or unpublished" });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Create blog
exports.createBlog = async (req, res) => {
  try {
    const blog = new Blog(req.body);
    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update blog by slug
exports.updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedBlog) return res.status(404).json({ message: "Blog not found" });
    res.json(updatedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const deleted = await Blog.findOneAndDelete({ slug: req.params.slug });
    if (!deleted) return res.status(404).json({ message: "Blog not found" });
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



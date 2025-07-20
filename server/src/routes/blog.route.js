const express = require("express");
const router = express.Router();
const {
  getAllBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog
} = require("../controllers/blog.controller");

// All blogs
router.get("/", getAllBlogs);

// Single blog by slug
router.get("/:slug", getBlogBySlug);

// Create blog
router.post("/", createBlog);


// Update blog by slug
router.put("/:slug", updateBlog);

router.delete("/:slug", deleteBlog);


module.exports = router;

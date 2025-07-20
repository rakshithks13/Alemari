const Blog = require("../models/blog.model");
const Testimonial = require("../models/testimonial.model");

const getDashboardSummary = async (req, res) => {
  try {
    const totalBlogs = await Blog.countDocuments();
    const publishedBlogs = await Blog.countDocuments({ status: "published" });
    const draftBlogs = await Blog.countDocuments({ status: "draft" });

    const totalTestimonials = await Testimonial.countDocuments();
    const approvedTestimonials = await Testimonial.countDocuments({ isActive: true });
    const pendingTestimonials = await Testimonial.countDocuments({ isActive: false });

    res.json({
      blogs: {
        total: totalBlogs,
        published: publishedBlogs,
        draft: draftBlogs,
      },
      testimonials: {
        total: totalTestimonials,
        approved: approvedTestimonials,
        pending: pendingTestimonials,
      },
    });
  } catch (err) {
    console.error("Error getting dashboard summary:", err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  getDashboardSummary,
};

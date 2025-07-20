const mongoose = require("mongoose");
const slugify = require("slugify");

const blogSchema = new mongoose.Schema({
  title: String,
  slug: { type: String, unique: true },
  description: String,
  content: String,
  image: String,
  metaTitle: String,
  metaDescription: String,
  keywords: [String],
  status: { type: String, enum: ["published", "draft"], default: "draft" },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }
});


// Auto-generate slug
blogSchema.pre("validate", function (next) {
  if (this.title && !this.slug) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

module.exports = mongoose.model("Blog", blogSchema);

const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  place: { type: String, required: true },
  description: { type: String, required: true }, // renamed from feedback
  image: { type: String }, // renamed from avatar
  isActive: { type: Boolean, default: true }, // new field
}, { timestamps: true });

module.exports = mongoose.model("Testimonial", testimonialSchema);

// components/FloatingWhatsApp.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/+919663575353" // Replace with your WhatsApp number
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default FloatingWhatsApp;

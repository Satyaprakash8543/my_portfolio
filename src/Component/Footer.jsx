import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" w-full bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* 🔹 Left - Copyright */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Satya Prakash. All rights reserved.
          <p>Email:prakashsp9572@gmail.com</p>
        </p>

        {/* 🔹 Center - Navigation (Optional) */}
        <div className="flex space-x-6 text-sm">
          <a href="/" className="hover:text-white transition">
            Home
          </a>
          <a href="/project" className="hover:text-white transition">
            Projects
          </a>
          <a href="/contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

        {/* 🔹 Right - Social Icons */}
        <div className="flex space-x-5 text-xl">
          <a
            href="https://github.com/Satyaprakash8543"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition transform hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/satya-prakash-prajapati-a741822bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition transform hover:scale-110"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

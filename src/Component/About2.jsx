import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 bg-gray-50 my-20 rounded-2xl shadow-lg">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
        <p className="text-gray-500 mt-2">Get to know me</p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">MERN Stack Developer</h3>

          <p className="text-gray-600 leading-relaxed mb-4">
            I am a passionate MERN Stack Developer with experience in building
            modern, responsive, and scalable web applications. I enjoy turning
            complex problems into simple and user-friendly solutions.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Skilled in React, Node.js, Express, Next.js, and MongoDB. Always
            eager to learn new technologies and improve my development skills.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href="/resume.pdf"
              className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="px-6 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-72 h-72 object-cover rounded-full shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

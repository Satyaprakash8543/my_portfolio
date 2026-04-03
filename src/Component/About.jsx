import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 py-8 bg-gray-200 my-10 rounded shadow-xl/20">
        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold ">About Me</h2>
          <p className="text-gray-500 ">Get to know me</p>
          <div className="h-1 w-6 bg-green-500 mx-auto"></div>
        </div>
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 15,
              delay: 0.1,
            }}
            className="text-2xl font-semibold mb-4"
          >
            MERN Stack Developer
          </motion.h3>
        </div>
        <div>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-lg">
            I am a passionate MERN Stack Developer with experience in building
            modern, responsive, and scalable web applications. I enjoy turning
            complex problems into simple and user-friendly solutions.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-lg">
            Skilled in React, Node.js, Express, Next.js, and MongoDB. Always
            eager to learn new technologies and improve my development skills.
          </p>
        </div>
      </section>
    </>
  );
};
export default About;

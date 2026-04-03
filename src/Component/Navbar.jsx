import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Navbarmenu } from "../mockdata/data.jsx"; // ✅ Import menu array
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-slate-900 shadow-xl/20">
      <nav className="w-full bg-indigo-200 flex justify-between items-center px-3 py-2">
        {/* Logo */}
        <motion.div
          initial={{ x: -200 }} //Start
          animate={{ x: 0 }}//Original Position
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 15,
            delay: 0.5,
          }}
          className="flex items-center"
        >
          <img
            className=" w-14 h-14 rounded-full object-cover"
            src="./assets/images/logo.png"
            alt="logo"
          />
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex font-semibold">
          {Navbarmenu.map((item, index) => (
            <motion.li
              initial={{ y: -100 }} //Start
              animate={{ y: 0 }} //Original Position
              transition={{
                duration: 1.5,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
              key={item.id}
              className="mx-4 cursor-pointer hover:text-indigo-700"
            >
              <a href={item.path}>{item.name}</a>
            </motion.li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block px-4 py-2 bg-indigo-700 text-white rounded font-bold cursor-pointer hover:bg-indigo-800">
          Login/Signup
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-indigo-100 px-4 py-3 space-y-3 font-semibold">
          {Navbarmenu.map((item) => (
            <a
              key={item.id}
              href={item.path}
              className="block hover:text-indigo-700"
            >
              {item.name}
            </a>
          ))}

          <button className="w-full shadow-indigo-500/50 bg-indigo-700 text-white py-2 rounded font-bold hover:bg-indigo-800">
            Login/Signup
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;

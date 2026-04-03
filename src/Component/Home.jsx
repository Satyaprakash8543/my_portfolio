// import React from "react";

// const Home = () => {
//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 mx-2 my-2 rounded ">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl w-full">
        
//         {/* 👉 Left Content */}
//         <div className="text-center md:text-left">
//           <h2 className="text-4xl md:text-6xl font-bold">
//             Hi, I'm Satya Prakash 👋
//           </h2>
//           <p className="mt-4 text-lg md:text-2xl">
//             Full Stack Developer (MERN)
//           </p>

//           {/* Resume Button */}
//           <button className="mt-6 px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-200 transition">
//             Download Resume
//           </button>

//           {/* Action Buttons */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 max-w-sm mx-auto md:mx-0">
//             <button className="text-lg sm:text-xl rounded bg-slate-500 text-white p-3 w-full hover:bg-slate-600 transition">
//               View My Work
//             </button>
//             <a href="/contact">
//             <button className="text-lg sm:text-xl rounded bg-blue-500 text-white p-3 w-full hover:bg-blue-600 transition" >
//               Contact Me
//             </button>
//             </a>
//           </div>
//         </div>

//         {/* 👉 Right Image */}
//         <div className="flex justify-center md:justify-end">
//           <img
//             className="rounded-full w-60 h-60 md:w-80 md:h-80 object-cover shadow-lg"
//             src="./assets/images/sp.jpg"
            
//             alt="Satya Prakash"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;


import React from "react";
// import profileImg from "./assets/images/sp.jpg"; // adjust path if needed

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-10 mx-2 my-2 rounded">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl w-full">
        
        {/* 👉 Left Content */}
        <div className="text-center md:text-left">
          
          <h2 className="text-4xl md:text-6xl font-bold">
            Hi, I'm Satya Prakash 👋
          </h2>

          <p className="mt-4 text-lg md:text-2xl">
            Full Stack Developer (MERN)
          </p>

          {/* ✅ Resume Download */}
          <a
            href="/assets/resume/Sp_Resume.pdf"
            download
            className="mt-6 inline-block px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-200 transition hover:scale-105"
          >
            Download Resume
          </a>

          {/* ✅ Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 max-w-sm mx-auto md:mx-0">
            
            {/* View Work */}
            <a
              href="/project"
              className="text-lg sm:text-xl rounded bg-slate-500 text-white p-3 w-full text-center hover:bg-slate-600 transition hover:scale-105"
            >
              View My Work
            </a>

            {/* Contact */}
            <a
              href="/contact"
              className="text-lg sm:text-xl rounded bg-blue-500 text-white p-3 w-full text-center hover:bg-blue-600 transition hover:scale-105"
            >
              Contact Me
            </a>

          </div>
        </div>

        {/* 👉 Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/assets/images/sp.jpg"
            alt="Satya Prakash"
            className="rounded-full w-60 h-60 md:w-80 md:h-80 object-cover shadow-lg hover:scale-105 transition duration-300"
          />
        </div>

      </div>
    </section>
  );
};

export default Home;

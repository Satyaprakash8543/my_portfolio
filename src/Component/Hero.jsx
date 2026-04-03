import ResumeForm from "./ResumeForm";
import React from "react";
const Hero=()=>{
    return(
        <>
        <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-indigo-500 to-purple-500 text-white  mx-3 my-3  ">
        <h2 className="text-4xl md:text-6xl font-bold">Hi, I'm Satya Prakash👋</h2>
        <p className="mt-4 text-lg md:text-2xl">Full Stack Developer (MERN)</p>
        <button className="mt-6 px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-200">
          Download Resume
        </button>
      </section>
       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <ResumeForm />
      </div>
        </>
    )
}
export default Hero;
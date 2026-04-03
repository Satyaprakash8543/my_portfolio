import React from "react";
const Contact = () => {
  return (
    <>
      <section className="max-w-4xl mx-auto px-6 py-16 shadow-md my-6" >
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <textarea
            placeholder=" Message"
            className="w-full px-4 py-2 border rounded-lg"
          ></textarea>
          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700">
            Send Message
          </button>
        </form>
      </section>
    </>
  );
};
export default Contact;

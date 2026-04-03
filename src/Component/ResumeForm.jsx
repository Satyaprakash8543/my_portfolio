import React from "react";
import { useForm } from "react-hook-form";
import jsPDF from "jspdf";

export default function ResumeForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(18);
    doc.text(`${data.name}`, 20, 20);

    // Contact Info
    doc.setFontSize(12);
    doc.text(`Email: ${data.email}`, 20, 30);
    doc.text(`Phone: ${data.phone}`, 20, 40);

    // Summary
    doc.setFontSize(14);
    doc.text("Summary", 20, 55);
    doc.setFontSize(12);
    doc.text(data.summary, 20, 65, { maxWidth: 170 });

    // Skills
    doc.setFontSize(14);
    doc.text("Skills", 20, 90);
    doc.setFontSize(12);
    doc.text(data.skills, 20, 100, { maxWidth: 170 });

    // Projects
    doc.setFontSize(14);
    doc.text("Projects", 20, 120);
    doc.setFontSize(12);
    doc.text(data.projects, 20, 130, { maxWidth: 170 });

    // Education
    doc.setFontSize(14);
    doc.text("Education", 20, 150);
    doc.setFontSize(12);
    doc.text(data.education, 20, 160, { maxWidth: 170 });

    // Save PDF
    doc.save(`${data.name}_Resume.pdf`);
    reset();
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Resume Builder</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <input
          type="text"
          placeholder="Full Name"
          {...register("name")}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="text"
          placeholder="Phone"
          {...register("phone")}
          className="w-full p-2 border rounded"
          required
        />

        <textarea
          placeholder="Summary"
          {...register("summary")}
          className="w-full p-2 border rounded"
          rows="3"
        />

        <textarea
          placeholder="Skills (comma separated)"
          {...register("skills")}
          className="w-full p-2 border rounded"
          rows="2"
        />

        <textarea
          placeholder="Projects"
          {...register("projects")}
          className="w-full p-2 border rounded"
          rows="3"
        />

        <textarea
          placeholder="Education"
          {...register("education")}
          className="w-full p-2 border rounded"
          rows="3"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Generate PDF
        </button>
      </form>
    </div>
  );
}

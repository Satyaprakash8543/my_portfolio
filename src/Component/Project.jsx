import React from "react";

const Project2 = () => {
  const ProjectData = [
    {
      id: 1,
      name: "Food Recipe App",
      github: "https://github.com/Satyaprakash8543/food-recipe",
      live: "https://food-recipe-eta-one.vercel.app",
      image: "/assets/images/Food_recepi.jpg",
      tech: ["React", "CSS"],
      category: "Frontend",
      description:
        "A responsive recipe application that displays various food items with a clean UI, built using React.",
    },
    {
      id: 2,
      name: "MERN CRUD App",
      github: "https://github.com/Satyaprakash8543/MERN_CRUD",
      live: "",
      image: "/assets/images/Crud.jpeg",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      category: "Full Stack",
      description: "A full-stack CRUD application using the MERN stack.",
    },
    {
      id: 3,
      name: "Razorpay Clone",
      github: "https://github.com/Satyaprakash8543/Razorpay_clone",
      live: "",
      image: "/assets/images/Razorpay.jpg",
      tech: ["Next.js", "Tailwind CSS"],
      category: "Frontend",
      description:
        "A responsive Razorpay-inspired UI clone built with modern design.",
    },
    {
      id: 4,
      name: "Music_academy",
      github: "https://github.com/Satyaprakash8543/Music_Academy",
      live: "https://music-academy-kbtj.vercel.app/courses",
      image: "/assets/images/music1.jpg",
      tech: ["Next.js", "Tailwind CSS"],
      category: "Frontend",
      description:
        "  Music School is a premier institution dedicated to teaching and nurturing musical talent.",
    },
    {
      id: 5,
      name: "Estate_Clone",
      github: "https://github.com/Satyaprakash8543/Estateproject",
      live: "https://estateproject-six.vercel.app/",
      image: "/assets/images/Esatate1.avif",
      tech: ["React js", "Tailwind CSS"],
      category: "Frontend",
      description:
        "A responsive inspired UI clone built with modern design.",
    },
  ];

  return (
    <section className="bg-gray-100 py-4  my-2 mx-3 rounded-2xl shadow-lg overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-5 space-y-2">
          <h2 className="text-4xl font-bold ">Projects</h2>
         <div className="mx-auto h-1 w-35 bg-green-500"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ProjectData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-50 bg-cover"
              />

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold">{item.name}</h3>

                <p className="text-sm text-gray-500 mb-2">{item.category}</p>

                <p className="text-gray-600 text-sm mb-3">{item.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-200 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    GitHub
                  </a>

                  {item.live && (
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1 text-sm border border-green-500 text-green-600 rounded hover:bg-green-500 hover:text-white"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project2;

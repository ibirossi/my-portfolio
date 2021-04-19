import React, { useEffect, useState } from "react";
import sanityClient from "../client";

const Project = () => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          title,
          date,
          place,
          description,
          projectType,
          link,
          tags,
          mainImage{
            asset->{
            _id,
            url
        },
        alt
      }  


      }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);
  return (
    <main className="min-h-max p-12 w-screen bg-gray-100">
      <section className="container min-h-screen mx-auto">
        <h1 className="text-gray-700 text-5xl flex justify-center cursive">My Projects</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my projects page!
        </h2>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="block h-100 relative rounded shadow-xl leading snug bg-white border-l-4 border-gray-700 pl-5 overflow-y-auto pb-20">
              
                <h3 className="text-gray-700 text-lg font-bold mb-2 hover:text-red-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="flex-col text-gray-500 text-xs">
                  <span>
                    <strong className="font-bold">Date</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <br></br>
                  {/* <span>
                              <strong className="font-bold">Company</strong>:{" "}
                              {project.place}
                          </span> */}
                  <span>
                    <strong className="font-bold">Type</strong>:{" "}
                    {project.projectType}
                  </span>

                  <img
                    src={project.mainImage.asset.url}
                    alt="project"
                    className="w-12 h-12 rounded-r relative"
                  />

                  <p className="my-6 text-gray-700 leading-relaxed">
                    {project.description}
                  </p>

                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-red-500 font-bold hover:underline hover:text-red-400 cursor-pointer"
                  >
                    View The Project{" "}
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
};

export default Project;

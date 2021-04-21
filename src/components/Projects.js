import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import { GrLaunch } from "react-icons/gr";
import { RiGithubFill } from "react-icons/ri";
import { ImSpinner8 } from "react-icons/im";

const Projects = () => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"] | order(date desc){
        title,
        imagesGallery[]{ asset->{ url }},
        date,
        place,
        description,
        projectType,
        link,
        gitLink,
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

  if (!projectData)
    return (
      <div className="container mx-auto animate-spin">
        <ImSpinner8 />
      </div>
    );

  return (
    <main className="min-h-screen p-12">
      <section className="container mx-auto relative">
        <h1 className="text-gray-700 text-lg sm:text-2xl md:text-2xl flex justify-center cursive">
          Welcome to my projects page!
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <div
                key={index}
                className="pt-5 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
              >
                <div className="lg:flex-col">
                  <div className="lg:flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover align-center rounded"
                      src={project.mainImage.asset.url}
                      alt={project.alt}
                    />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-gray-500 font-semibold">
                      {project.title}
                    </div>
                    <div>
                      <span className="text-xs">
                        <strong className="font-bold">Date</strong>:{" "}
                        {new Date(project.date).toLocaleDateString("en-GB", {
                          year: "numeric",
                          month: "2-digit",
                        })}
                      </span>
                    </div>

                    <p className="tracking-tighter p-2 text-gray-500 mt-2">
                      {project.description}{" "}
                    </p>

                    <div className="flex justify-center space-x-10 pt-4">
                      <a
                        href={project.link}
                        alt={project.title}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GrLaunch className="h-6 w-6 md:h-8 md-w-8 shadow-2xl" />
                      </a>
                      <a
                        href={project.gitLink}
                        alt={project.title}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <RiGithubFill className="h-6 w-6 md:h-8 md-w-8" />
                      </a>
                    </div>
                    <div className="flex space-x-4 pt-4 align-center justify-center items-center">
                      {project.imagesGallery.map((pic, index) => {
                        return (
                          <>
                            <span key={index}>
                              <img
                                className="w-8 h-8 md:w-10 md:h-10"
                                src={pic.asset.url}
                                alt={pic.asset.alt}
                              />
                            </span>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;

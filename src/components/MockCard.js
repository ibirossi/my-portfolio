import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import { LinkIcon, CodeIcon } from "@heroicons/react/solid";
import logo from '../logo.svg'

const MockCard = () => {
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
    <main className="min-h-screen p-12 w-screen bg-gray-100">
      <section className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div class="md:flex">
                  <div class="md:flex-shrink-0">
                    <img
                      class="h-48 w-full object-cover md:w-48 rounded"
                      src={project.mainImage.asset.url}
                      alt="Man looking at item at a store"
                    />
                  </div>
                  <div class="p-8">
                    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      {project.title}
                      
                    </div>
                    <div>
                    <span className="text-xs">
                    <strong className="font-bold">Date</strong>:{" "}
                    {new Date(project.date).toLocaleDateString('en-GB', {year:'numeric', month:'2-digit'})}
                  </span>
                    </div>
                    
                    <p class="mt-2 text-gray-500">{project.description} </p>
                    <div className=""> 
                    {
                      project.tags.map((tag, index) =>{
                        return <>
                        <div key={index}>
                          
                            <span className="text-xs">{tag}</span>
                          
                        </div>
                        </>
                      })
                    }
                   
                  
                    
                  
                    </div>
                    <div>
                    <a
                      href={project.link}
                      alt={project.title}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                    >
                      <LinkIcon className="h-4 w-4 text-gray-400"/>
                      <CodeIcon className="h-4 w-4 text-gray-400"/>
                    </a>
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

export default MockCard;

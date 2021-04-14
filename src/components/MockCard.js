import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import { LinkIcon, CodeIcon } from "@heroicons/react/solid";



const MockCard = () => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
    .fetch(
      `*[_type == "project"]{
        title,
        imagesGallery[]{ asset->{ url }},
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
   
    <main className="min-h-screen p-12 w-screen">
      <section className="container mx-auto relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
          {projectData &&
            projectData.map((project, index) => (
              <div className="p-2 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover md:w-48 rounded"
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
                    {new Date(project.date).toLocaleDateString('en-GB', {year:'numeric', month:'2-digit'})}
                  </span>
                    </div>

                    <p className="mt-2 text-gray-500">{project.description} </p>
                    
                    <div>
                    <a
                      href={project.link}
                      alt={project.title}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                    >
                      <LinkIcon className="h-4 w-4 text-gray-400"/>
                      <CodeIcon className="h-4 w-4 text-gray-400"/>
                    </a>
                    </div>
                  </div>
                </div>
                {console.log("images", project.imagesGallery)}
                {project.imagesGallery.map((pic, index) =>{
                  return <div className="fade-in p-2 flex inline-flex align-center justify-center">
                  <span key={index}><img className="w-8 h-8" src={pic.asset.url} alt={pic.asset.alt} /></span>
                  </div>
                })}
                
              </div>
            ))}
        </div>
      </section>
    </main>
  );
};

export default MockCard;

import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from '@sanity/block-content-to-react';

//import bg image from src file

const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }

const About = () => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
            name, 
            bio, 
            "authorImage": image.asset->url
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div className="animation-pulse animation-bounce">Loading...</div>;

  

  return (
    <main className="relative">
      {/* <img className="absolute w-full"/> */}
      <div className="p-10 lg:pt-48 mx-auto container relative">
        <section className="rounded-lg shadow-2xl lg:flex p-200 lg:p-20">
          <img src={urlFor(author.authorImage).url() } alt={author.name} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8" />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl mb-4">Hey there! I'm{" "}
              <span className="text-green-100">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl">
              <BlockContent blocks={author.bio} projectId="gnfumd7q" dataset="production"/>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;

import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { ImSpinner8 } from "react-icons/im";

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

  if (!author)
    return (
      <div className="flex justify-center align-center items-center mt-48">
        <ImSpinner8 className="animate-spin w-8 h-8" />
      </div>
    );

  return (
    <main className="relative">
      <div className="p-10 lg:pt-12 mx-auto container relative">
        <section className="rounded-lg shadow-2xl lg:flex p-200 lg:p-20">
          <img
            src={urlFor(author.authorImage).url()}
            alt={author.name}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mx-auto "
          />
          <div className="text-lg flex flex-col justify-center p-4">
            <h1 className="cursive text-2xl mb-4">
              Hey there! I'm{" "}
              <span className="text-gray-300">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl">
              <BlockContent
                blocks={author.bio}
                projectId="gnfumd7q"
                dataset="production"
              />
            </div>
            <div className="mx-auto">
              <a
                href="https://drive.google.com/file/d/18EwrHVLEOpRMgpSS9iD8h9biKMdxCXcf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline"
              >
                <button className="focus:outline-none px-3 py-2 mx-auto text-sm md:text-lg no-underline uppercase font-bold leading-snug rounded-full bg-yellow-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-lg">
                  Resume
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;

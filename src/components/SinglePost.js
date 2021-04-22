import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { ImSpinner8 } from "react-icons/im";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
              asset->{
                  _id, 
                  url
              }  
            },
            body,
            "name": author->name,
            "authorImage": author->image, 
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost)
    return (
      <div className="flex justify-center align-center items-center mt-48">
        <ImSpinner8 className="animate-spin w-8 h-8"/>
      </div>
    );

  return (
    <main className="bg-gray-100 min-h-screen p-12">
      <article className="container mx-auto shadow-lg shadow-lg rounded-lg">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div
              className="bg-white shadow-lg sm:rounded-3xl p-1 sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200"
              style={{ backdropFilter: "blur(5px)" }}
            >
              <h1 className="cursive text-xl md:text-2xl lg:text-6xl mb-4">
                {singlePost.title}
              </h1>
              <div className="flex justify-center text-gray-800">
                {/* Using urlFor allows to add different parameters e.g. width, height etc */}
                <img
                  src={urlFor(singlePost.authorImage).url()}
                  alt={singlePost.name}
                  className="w-10 h-10 rounded-full"
                />
                <p className="cursive flex items-center pl-2 text-lg md:text-xl">
                  {singlePost.name}
                </p>
              </div>
            </div>
          </div>
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className="w-full object-cover rounded-t"
            style={{ height: "400px" }}
          />
        </header>
        <div className="px-4 lg:px-48 py-12 lg:py-20 prose-xs md:prose-lg lg:prose-xl lg:text-justify max-w-full">
          {/* BlockContent (from @sanity/block-content-to-react) */}
          {/* Allows styling, images etc carried out in sanity to appear correctly in app */}
          <BlockContent
            blocks={singlePost.body}
            projectId="gnfumd7q"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
};

export default SinglePost;

import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import sanityClient from '../client';
import { ImSpinner8 } from "react-icons/im";

const Post = () => {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
      sanityClient
        .fetch(`*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                _id,
                url
            },
            alt
          }  
        }`)
        .then((data) => setPostData(data))
        .catch(console.error)
  }, [])

  if (!postData)
    return (
      <div className="flex justify-center align-center items-center mt-48">
        <ImSpinner8 className="animate-spin w-8 h-8"/>
      </div>
    );

    return (
        <main className="min-h-full p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">Blog Posts</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my Blog</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {postData && postData.map((post, index) => (
                    <article className="transition duration-500 ease-in-out transform hover:-translate-y-5 hover:scale-110">
                      <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                        <span className="block h-64 relative rounded shadow-xl leading snug bg-white" key={index}>
                          <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="w-64 h-64 rounded-r object-cover absolute"/>
                          <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                              <h3 className="text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded-sm">{post.title}</h3>
                          </span>

                        </span>
                        </Link>
                    </article>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Post

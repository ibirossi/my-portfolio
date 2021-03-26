import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import sanityClient from '../client';

const Post = () => {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
      sanityClient
        .fetch(`*[_type=="post"]{
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

    return (
        <main className="bg-green min-h-screen p12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">Blog Posts</h1>
                <h2 className="text-lg text-gray-600 justify-center mb-12">Welcome to my Blog</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <article>
                      <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                        <span>
                          <img />
                          <span>
                              <h3></h3>
                          </span>

                        </span>
                        </Link>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default Post

import React from 'react';
import image from '../sebastien-garnier-gsv-fields-06.jpg'

const Home = () => {
    return (
        <main>
            <img src={image} alt="spaceship" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-white font-bold leading-none lg:leading-snug home-name">Helloooooo I am Ross</h1>
            </section>
        </main>
    )
}

export default Home

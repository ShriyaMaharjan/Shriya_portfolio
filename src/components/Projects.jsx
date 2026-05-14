import React from "react";
import ecommerceImg from '../assets/ecommerce.avif';
import birdImg from '../assets/bird.jpg';
import hamroImg from '../assets/hamrobazar.jpg';
import bmiImg from '../assets/bmi.png';
import weatherImg from '../assets/weather.jpg';
import travelImg from '../assets/travel.jpg';

export default function Projects() {
    const projects = [
        {
            title: "E-commerce Website",
            description: "An e-commerce website is an online platform that allows businesses and individuals to sell physical or digital products and services directly to consumers over the internet.",
            image: ecommerceImg,
            tags: ["HTML", "CSS", "JS","PHP","SQL"]
        },
        {
            title: "Bird Species Identification",
            description: "This project is about identifying bird species using both audio and images. It has 575 bird species data for bird species identification using image and 100 species for identifying bird species using audio.",
            image: birdImg,
            tags: ["Jupyter Notebook", "Numpy", "Python", "CNN"]
        },
        {
            title: "HamroBazaar",
            description: "This project was an online website that lets you buy and sellthe goods and also the customers can add the products that want to sell with the description, price and also  how new or old is that product.",
            image: hamroImg,
            tags: ["HTML", "CSS", "JavaScript","PHP", "SQL"]
        },
        {
            title:"BMI Calculator",
            description:"This project was about calculating the body mass index using the person;s height and weight and according to those details showing obese, normal, overweight, and thin.",
            image: bmiImg,
            tags: ["Android Studio", "Java"]
        },
        {
            title:"Weather App",
            description: "This project was about the weather forecast where the weather was predicted if it will rain, sunny, cloudy day-to-day. We had to put the location of where you live.",
            image: weatherImg,
            tags: ["Android Studio", "Java", "Weather API"]
        },
        {
            title: "Travel Website",
            description: "This project was about travelling and getting the hotel and also the itenaries that they can do where they liveand have fun also choose the activities they want to do like hiking, yoga, and many more.",
            image: travelImg,
            tags: ["React.js","Node.js","JavaScript"]
        }
    ];

    return (
        <section className="w-full px-6 md:px-12 py-20 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900">Featured Projects</h2>
                    <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                        A showcase of my recent work and personal projects
                    </p>
                </div>
                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden flex flex-col hoer:shadow-md transition-shadow duration-300">
                            {/* Project Image */}
                            <div className="h-64 overflow-hidden bg-gray-100">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                            </div>
                            {/* Project Info */}
                            <div className="p-8 flex flex-col flex-grow space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900 text-center">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                                    {project.description}
                                </p>
                                {/* tags */}
                                <div className="flex flex-wrap gap-2 pt-4 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-black text-white text-[10px]font-bold rounded-full uppercase tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
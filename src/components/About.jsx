import React from "react";
import {Code2, Palette, Target} from 'lucide-react';

export default function About(){
    const specializations = ["Web Development", "UI/UX Design","React.js", "TAilwindcss"];

    const highlights = [
        {
            icon: <Code2 className="text-white" size={20}/>,
            title: "Clean Code",
            description: "Writing maintainable and scalable solutions",
        },
        {
            icon: <Palette className="text-white" size={20}/>,
            title:"Design Focus",
            description: "Creating beautiful and intuitive interfaces",
        },
        {
            icon: <Target className="text-white" size={20}/>,
            title: "Goal Oriented",
            description: "Focused on achieving business objectives",
        },
    ];

    return(
        <section className="w-full mx-auto px-6 py-20 bg-white">
            {/* Header */}
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-5xl font-bold text-gray-900">About Me</h2>
                <p className="text-gray-400 max-x-2xl mx-auro leading-relaxed">
                    Passionate developer with a keen eye for design and a commitment to excellence.
                </p>
            </div>
            {/* Grid Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* left card: Main Bio */}
                <div className="lg:col-span-2 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-6">
                    <p className="text-gray-700 leading-relaxed bg-white ">
                        I'm a frontend developer and UI/UX designer who bridges the gap between design and development.
                        My expertise lies in building pixel perfect, performant react applications styled with Tailwind CSS.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        From wireframes to production code, I handle the entire frontend journey. I believe that great design and clean code go hand-in-hand to create interfaces that are both beautiful and accessible.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        When I;m not coding, you'll find me exploring the latest design trendsin Figma,
                        contributing to open-source UI libraries, or sharing frontend tips with the developer community.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        My goal is always to deliver code that is as maintainable as the design is compelling,
                        ensuring that every interaction adds value to the user's journey.
                    </p>
                </div>
                {/* right side: Skills & Highlights */}
                <div className="space-y-6">
                    {/* Specialization card */}
                    <div className="p-8 rounded-[2rem] border border-gray-100 shadow-sm bg-white">
                        <h3 className="text-lg font-semibold mb-6">Specialization</h3>
                        <div className="flex flex-wrap gap-2">
                            {specializations.map((skill) => (
                                <span key={skill} className="px-4 py-2 bg-black text-white text-xs font-medium rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* Featured Highlights */}
                    <div className="space-y-4">
                        {highlights.map((item, index) => (
                            <div key={index} 
                                className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 shadow-sm bg-white">
                                <div className="bg-black p-3 rounded-xl shadow-md">
                                {item.icon}
                                </div>
                                <div>
                                <h4 className="text-sm font-bold text-gray-900">{item.title}</h4>
                                <p className="text-xs text-gray-400 mt-1">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

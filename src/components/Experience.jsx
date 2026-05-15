import React from 'react';
import { MapPin } from 'lucide-react';

export default function Experience(){
    const experiences = [
        {
            role: "Frontend Developer",
            company: "PP Technologies",
            period: "2025-Present",
            type: "Full Time",
            location: "Tripureshwor, Kathmandu",
            achievements:[
                "Designed multiple website UI in figma",
                "Built billing + Hrms website using react, tailwindcss",
                "Working in designing more UI and also coding for websites",
                "Collaborated with design team on UX improvements" 
            ]
        },
        {
            role: "Intern Frontend Developmet",
            company: "SpydersLab Pvt.Ltd",
            period: "2024",
            type: "Full Time",
            location: "Sinamangal, Kathmandu",
            achievements:[
                "Learned about how codebase works in real company",
                "Got guidance on react more about the components etc",
                "Developed reusable component library used across 5 projects",
                "Collaborated with design team on UX improvements",
                "Got to learn UI/UX design in figma"
            ]
        }
    ];

    return(
        <section id = "experience" className="w-full px-6 md:px-12 py-8 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                {/* Github Button */}
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="mb-12 flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform">
                View All Projects On Github
                </a>
                {/* header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900">Work Experience</h2>
                    <p className="text-gray-400 text-lg">My professional Journey</p>
                </div>

                {/* Experience List */}
                <div className="w-full space-y-8">
                    {(experiences || []).map((exp, index) => (
                        <div key={index} className="w-full bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm flex flex-col md:flex-row justify-between gap-8">
                            {/* left side : Meta & Achievements */}
                            <div className="flex-1 space-y-6">
                                <div className="flex flex-wrap gap-3">
                                    <span className="bg-black text-white text-[10px] font-bold px-4 py-1.5 rounded-full">
                                        {exp.period}
                                    </span>
                                    <span className="bg-black text-white text-[10px] font-bold px-4 py-1.5 rounded-full">
                                        {exp.type}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700 font-medium">
                                    <MapPin size={18} />
                                    {exp.location}
                                </div>
                                <div className="space-y-4">
                                    <h4 className="font-bold text-gray-900 text-lg">Key Achievement</h4>
                                    <ul className="space-y-3">
                                        {(exp.achievements || []).map((item, i) => (
                                            <li key={i} className="text-gray-600 leading-relaxed pl-1">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {/* Right side: Role and Company */}
                            <div className="md:text-right flex flex-col justify-start">
                                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                                    {exp.role}
                                </h3>
                                <p className="text-2xl text-gray-800 mt-2">
                                    {exp.company}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
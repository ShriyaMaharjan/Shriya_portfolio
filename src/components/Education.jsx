import React from "react";

export default function Education(){
    const education = [
        {
            period: "2019-2024",
            degree: "Bachelor's in Computer Application",
            institution: "DAV College",
            details:[
                "Programming Languages - Java, Python, JavaScript",
                "Web & Mobile Development - PHP, XAMPP, SQL, HTML, CSS",
                "Core Computing - Operating System, Computer Networks and Digital Logic",
                "Algorithms & Logic - Training in data structure and algorithms"
            ]
        },
        {
            period: "2017-2019",
            degree: "+2 Computer Science",
            institution: "DAV College",
            details:[
                "Understanding logic and basic syntax",
                "Programming languages - C or C++",
                "Hardware - Basic Logic gates"
            ]
        }
    ];

    const certifications = [
        {
            title:"Python Certification",
            institution: "DAV College",
            year:"2024",
            highlights: [
                "Learned about pandas how to run and import",
                "Learn to train the datasets",
                "Data Analysis - Learned the libraries NumPy, pandas",
                "Learned Matplotlib for data visualization"
            ]
        }
    ];

    return(
        <section className="w-full px-6 md:px-12 py-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Main section Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900">Education & Certification</h2>
                    <p className="text-gray-400 text-lg">Academic background and professional certifications</p>
                </div>
                {/* Education Subsection */}
                <div className="mb-20">
                    <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">Education</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {education.map((edu, index) => (
                            <div key={index} className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-10 shadow-sm flex flex-col">
                                <span className="font-bold text-gray-900 mb-2">{edu.period}</span>
                                <h4 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h4>
                                <p className="text-gray-600 font-medium mb-6">{edu.institution}</p>

                                <ul className="space-y-3 mt-auto">
                                    {edu.details.map((detail, i) => (
                                        <li key={i} className="text-gray-600 text-sm leading-relaxed">
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Certification subsection */}
                <div>
                    <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">Certification</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {certifications.map((cert, index) => (
                            <div key={index} className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-10 shadow-sm">
                                <h4 className="text-xl font-bold text-gray-900 mb-1">{cert.title}</h4>
                                <p className="text-gray-600 font-medium">{cert.institution}</p>
                                <p className="font-bold text-gray-900 mb-6">{cert.year}</p>
                                <ul className="space-y-3">
                                    {cert.highlights.map((highlight, i) => (
                                        <li key={i} className="text-gray-600 text-sm leading-relaxed">
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
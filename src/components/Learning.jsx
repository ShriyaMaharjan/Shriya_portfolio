import React from "react";

export default function Learning(){
    const learningTopics = [
        "Artificial Intelligence",
        "Machine Learning",
        "Node.js/Express",
        "PostgreSql",
        "AWS/Cloud Sercices",
    ];
    return(
        <section id = "learning" className="w-full px-6 md:px-12 py-10 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Main black card */}
                <div className="w-full bg-black rounded-[3rem] p-12 md:pd-20 text-center space-y-10">
                {/* header */}
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-right">
                    Always Learning
                </h2>
                {/* Discription with custom underline */}
                <p className="text-white/80 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-light">
                    Technology evolves rapidly, and so do I. Currently exploring 
                    AI/ML integration, Web3 technologies, and advanced cloud architectures 
                    to stay ahead of the curve.
                </p>
                {/* tags */}
                <div className="flex flex-wrap justify-center gap-4 pt-6">
                    {learningTopics.map((topic) =>(
                        <span key={topic} className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-colors cursor-default">
                            {topic}
                        </span>
                    ))}
                </div>
                </div>
            </div>
        </section>
    );
}
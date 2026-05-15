import React from 'react';

export default function Skill() {
  // 1. Define the arrays clearly inside the function
  const technicalSkills = ["React.js", "Tailwindcss", "HTML", "JavaScript"];
  const softSkills = ["Communication", "Project Management", "Problem Solving"];

  return (
    <section id = "skill" className="w-full px-6 md:px-12 py-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-bold text-gray-900">Skills & Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit built through years of hands-on experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Technical Skills */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 text-center">Technical Skills</h3>
            <div className="bg-white border border-gray-100 shadow-sm rounded-[2rem] p-10">
              <ul className="space-y-4">
                {/* 2. Ensure you call .map() ON the array variable */}
                {technicalSkills.map((skill) => (
                  <li key={skill} className="text-lg font-medium text-gray-700 flex items-center gap-3">
                    <div className="h-1.5 w-1.5 bg-black rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 text-center">Soft Skills</h3>
            <div className="bg-white border border-gray-100 shadow-sm rounded-[2rem] p-10">
              <ul className="space-y-4">
                {/* 3. Check spelling: softSkills (plural) must match the definition above */}
                {softSkills.map((skill) => (
                  <li key={skill} className="text-lg font-medium text-gray-700 flex items-center gap-3">
                    <div className="h-1.5 w-1.5 bg-black rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
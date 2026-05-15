import React from 'react';

export default function Footer(){
    return(
        <footer id = "footer" className="w-full bg-black text-white px-6 md:px-13 py-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
                {/* portfolio Info */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold">Shriya Maharjan</h2>
                    <p className="text-gray-400 leading-relaxed max-w-xs">
                        Frontend developer & UI/UX designer passionate about creating exceptional digital experiences.
                    </p>
                </div>
                {/* Navigation Links */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Quick Links</h3>
                    <ul className="space-y-3 text-gray-400">
                        <li className="hover:text-white cursor-pointer transition-colors">Home</li>
                        <li className="hover:text-white cursor-pointer transition-colors">About</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Project</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Experience</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
                    </ul>
                </div>
                {/* Direct Contact */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Get In Touch</h3>
                    <div className="space-y-3 text-gray-400">
                        <p>Email: <span className="hover:text-white cursor-pointer">shriyamaharjan2468@gmail.com</span></p>
                        <p>Phone: +977 9803625296</p>
                        <p>Location: Jawalakhel, Lalitpur</p>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="max-w-7xl mx-auto pt-10 border-t border-gray-800 text-center flex items-center justify-center gap-2 text-gray-400 text-sm">
                <span className="text-xl">©</span>
                <p>Shriya Maharjan. All rights reserved</p>
            </div>
        </footer>
    );
}
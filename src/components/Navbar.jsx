import {Download, Menu, X} from "lucide-react";
import profileImage from "../assets/2.jpg";
import { useState } from "react";

export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if(section){
            section.scrollIntoView({behavior : "smooth"});
        }
    };
    return(
        <nav className="w-full bg-white px-6 py-4 sticky top-0 z-50 shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between">

                {/* logo */}
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 overflow-hidden rounded-full border border-black">
                        <img src={profileImage} alt="profile" className="h-full w-full object-cover"/>
                    </div>
                    <h1 className="text-sm font-medium tracking-wide">
                        Portfolio
                    </h1>
                </div>

                {/* Nav Links */}
                <ul className="hidden items-center gap-10 text-sm font-medium md:flex">
                    <li className="cursor-pointer hover:text-gray-500" onClick={() => handleScroll("about")}>About</li>
                    <li className="cursor-pointer hover:text-gray-500" onClick={() => handleScroll("skill")}>Skill</li>
                    <li className="cursor-pointer hover:text-gray-500" onClick={() => handleScroll("project")}>Project</li>
                    <li className="cursor-pointer hover:text-gray-500" onClick={() => handleScroll("experience")}>Experience</li>
                    <li className="cursor-pointer hover:text-gray-500" onClick={() => handleScroll("education")}>Education</li>
                    <li className="cursor-pointer hover:text-gray-500" onClick={() => handleScroll("contact")}>Contact</li>
                </ul>
                {/* Resume Button */}
                <a href="/Shriya_Resume.pdf" className="flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white">
                <Download size={16}/>
                Resume
                </a>
                {/* Hamburger button - mobile only */}
                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden mt-4 flex flex-col gap-4 bg-white px-6 pb-6 text-sm font-medium">
                    <li className="list-none cursor-pointer hover:text-gray-500" onClick={() => handleScroll("about")}>About</li>
                    <li className="list-none cursor-pointer hover:text-gray-500" onClick={() => handleScroll("skill")}>Skill</li>
                    <li className="list-none cursor-pointer hover:text-gray-500" onClick={() => handleScroll("project")}>Project</li>
                    <li className="list-none cursor-pointer hover:text-gray-500" onClick={() => handleScroll("experience")}>Experience</li>
                    <li className="list-none cursor-pointer hover:text-gray-500" onClick={() => handleScroll("education")}>Education</li>
                    <li className="list-none cursor-pointer hover:text-gray-500" onClick={() => handleScroll("contact")}>Contact</li>
                </div>
            )}
        </nav>
    );
}
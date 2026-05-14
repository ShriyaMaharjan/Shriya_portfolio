import {ArrowRight, Globe, User, Mail, X,} from "lucide-react";
import heroImage from "../assets/hero.jpg";

export default function Hero(){
    return(
        <section className="w-full bg-[#f5f5f5] px-6 py-16">
            <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
                {/* left content */}
                <div>
                    {/* Badge */}
                    <div className="mb-8 inline-block rounded-2xl border border-gray-300 px-6 py-3 text-sm text-gray-700">
                        Welcome to my Portfolio
                    </div>
                    {/* Heading */}
                    <h1 className="mb-4 text-5xl font-bold leading-tight md:text-6xl">
                        Hi! I'm{" "}
                        <span className="text-gray-300">
                            Shriya Maharjan
                        </span>
                    </h1>
                    {/* Subtitle */}
                    <p className="mb-6 text-xl text-gray-700">
                        Frontend Developer | UI/UX Designer
                    </p>
                    {/* Description */}
                    <p className="mb-10 max-w-xl text-lg leading-relaxed text-gray-600">
                        I craft exceptional digital experiences through clean code and beautiful design. Passionate about building scalable applications that solve real-world problems and delight users.
                    </p>
                    {/* Button */}
                    <div className="mb-10 flex flex-wrap items-center gap-4">
                        <button className="flex items-center gap-3 rounded-2xl bg-black px-8 py-4 text-lg font-medium text-white transition hover:bg-gray-800">
                            View Details
                            <ArrowRight size={22}/>
                        </button>
                        <button className="rounded-2xl bg-gray-300 px-8 py-4 text-lg font-medium text-white transition hover:bg-gray-400">
                            Contact Me
                        </button>
                    </div>
                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        <a href="https://shriya.com.np"
                            className="rounded-full border border-gray-300 p-3 transition hover:bg-black hover:text-white">
                            <Globe size={22} />
                        </a>
                        <a href="https://linkedin.com/in/shriyamaharjan"
                            className="rounded-full border border-gray-300 p-3 transition hover:bg-black hover:text-white">
                            <User size={22} />
                        </a>
                        <a href="mailto:shriya@email.com"
                            className="rounded-full border border-gray-300 p-3 transition hover:bg-black hover:text-white">
                            <Mail size={22} />
                        </a>
                        <a href="https://x.com/shriyamaharjan"
                            className="rounded-full border border-gray-300 p-3 transition hover:bg-black hover:text-white">
                            <X size={22} />
                        </a>
                    </div>
                </div>
                {/* Right Image */}
                <div className="flex justify-center lg:justify-end">
                    <div className="overflow-hidden rounded-[2rem] bg-[#ececec] p-4">
                        <img src={heroImage} alt="Hero" className="h-[500px] object-cover"/>
                    </div>
                </div>
            </div>
        </section>
    );
}
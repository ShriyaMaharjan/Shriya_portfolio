import React from "react";
import { Mail, Phone, MapPin, Send, Globe, User, X } from 'lucide-react';

export default function Contact(){
    return (
        <section id = "contact" className="w-full px-6 md:px-12 py-8 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* top banner */}
                <div className="bg-black rounded-[2.5rem] p-10 md:p-16 text-center mb-24">
                <h2 className="text-3xl md;text-4xl font-bold text-white mb-6">
                    Continuous Learning and Development
                </h2>
                <p className="text-gray-300 text-lg max-w-5xl mx-auto leading-relaxed">
                    I believe in lifelong learning and regularly invest time in courses, wrokshop and stay updated with the latest technologies. Currently pursuing in learning UI/UX design and also be more practical in doing react projects.
                </p>
                </div>
                {/* Get in Touch Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900">Get In Touch</h2>
                    <p className="text-gray-400 text-lg">
                        Have a project in mind? Let's work together to bring your ideas to life
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* left column: lets Talk & Socials */}
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h3 className="text-4xl font-bold text-gray-900">Let's Talk</h3>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                                Whether you have a question, projects idea, or just want to connect, I'm always open to discussing new opportunities and collaborations.
                            </p>
                        </div>
                        {/* Contact Info Cards */}
                        <div className="space-y-4">
                            {[
                                {icon: <Mail size={20}/>, title:"Email",value: "shriyamaharjan2468@gmail.com"},
                                {icon: <Phone size={20} />, title:"Phone", value:"+977 9803625296"},
                                {icon: <MapPin size={20}/>, title: "Location", value: "Jawalakhel, Lalitpur"}
                            ].map((item,idx) =>(
                                <div key={idx} className="flex items-center gap-5 p-5 border border-gray-100 rounded-2xl bg-white shadow-sm max-w-md">
                                    <div className="bg-black text-white p-3 rounded-xl">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-900 uppercase tracking-widest">{item.title}</p>
                                        <p className="text-gray-500 text-sm">{item.value}</p>
                                    </div>
                                    </div>
                            ))}
                        </div>
                        {/* Social Icons */}
                        <div className="space-y-6 pt-4">
                            <h4 className="text-xl font-bold text-gray-900">Connect in social media</h4>
                            <div className="flex gap-6 text-gray-900">
                                <Globe size={28} className="cursor-pointer hover:scale-110 transition-transform"/>
                                <User size={28} className="cursor-pointer hover:scale-110 transition-transform"/>
                                <Mail size={28} className="cursor-pointer hover:scale-110 transition-transform"/>
                                <X size={28} className="cursor-pointer hover:scale-110 transition-transform"/>
                            </div>
                        </div>
                    </div>
                    {/* Right column */}
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-900">Your Name</label>
                            <input type="text" placeholder="Shriya Maharjan" className="w-full p-4 rounded-xl border border-gray-100 bg-gray-50/50 outline-none focus:border-gray-300 transition-colors"/>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-900">Email Address</label>
                            <input type="email" placeholder="abc@gmail.com" className="w-full p-4 rounded-xl border border-gray-100 bg-gray-50/50 outline-none focus:border-gray-300 transition-colors"/>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-900">Subject</label>
                            <input type="text" placeholder="Project Inquiry" className="w-full p-4 rounded-xl border border-gray-100 bg-gray-50/50 outline-none focus:border-gray-300 transition-colors"/>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-900">Message</label>
                            <textarea rows="5" placeholder="Tell me about your project" className="w-full p-4 rounded-xl border border-gray-100 bg-gray-50/50 outline-none focus:border-gray-300 transition-colors"/>
                        </div>
                        <button className="bg-black text-white px-10 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-gray-800 transition-colors">
                            Send Message
                            <Send size={18}/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
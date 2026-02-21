import Image from "next/image";
import { Facebook, Twitter, Linkedin, Youtube, Atom } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-800 text-white relative overflow-hidden">
            {/* Top CTA Bar */}
            <div className="border-b border-slate-700">
                <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Let’s talk! Have a project for us!
                    </h2>
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 whitespace-nowrap">
                        Book Appointment
                    </button>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left: Image */}
                    <div className="w-full lg:w-1/3 relative h-[400px] rounded-lg overflow-hidden shrink-0">
                        <Image
                            src="/images/footer-worker.png"
                            alt="Join our team"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="flex-1 w-full pt-8">
                        <h2 className="text-5xl md:text-7xl font-bold mb-4">Consulto</h2>
                        <h2 className="text-5xl md:text-7xl font-bold text-slate-600 mb-24">Consultancy</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-700 pt-12">
                            <div>
                                <p className="text-white font-medium">info@consulto.com</p>
                            </div>
                            <div>
                                <p className="text-white font-medium">+91 99999999</p>
                            </div>
                            <div>
                                <p className="text-white font-medium">1/A, Kolkata, West Bengal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="bg-slate-900 py-6">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 gap-4">
                    <p>Copyright & design by <span className="text-white font-semibold">@FramerDevs</span> - 2025</p>

                    <div className="flex items-center gap-2">
                        <span className="mr-2">Follow us.</span>
                        <a href="#" className="hover:text-white transition"><Facebook size={16} /></a>
                        <a href="#" className="hover:text-white transition"><Atom size={16} /></a> {/* Using Atom as X logo placeholder */}
                        <a href="#" className="hover:text-white transition"><Linkedin size={16} /></a>
                        <a href="#" className="hover:text-white transition"><Youtube size={16} /></a>
                    </div>
                </div>
            </div>

            {/* Creator Credit Bar */}
            <div className="bg-black py-4 border-t border-slate-800">
                <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
                    <p className="text-slate-400">
                        Made with <span className="text-red-500 animate-pulse">❤</span> by <span className="text-white font-bold">Kunal</span>
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="https://github.com/kunalsuvosaha" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition group">
                            <span className="bg-slate-800 p-1.5 rounded-full group-hover:bg-blue-600 transition">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </span>
                            <span>GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/kunalsaha07/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition group">
                            <span className="bg-slate-800 p-1.5 rounded-full group-hover:bg-blue-600 transition">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </span>
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

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
        </footer>
    );
}

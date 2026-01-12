import Image from "next/image";
import { Star } from "lucide-react";

export default function Testimonials() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <div className="inline-block px-4 py-2 border border-slate-200 text-slate-500 rounded-full font-semibold text-sm mb-6">
                        Testimonials
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                        Happy users says
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Left: Profile Image */}
                    <div className="w-full md:w-1/3 flex flex-col items-center text-center">
                        <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-slate-50">
                            <Image
                                src="/images/avatar.png"
                                alt="Miranda H. Halim"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="font-bold text-slate-900 text-lg">Miranda H. Halim</h3>
                        <p className="text-slate-500 text-sm">Head Of Idea</p>
                    </div>

                    {/* Right: Quote & Stats */}
                    <div className="w-full md:w-2/3 border-l border-slate-100 pl-0 md:pl-12 pt-8 md:pt-0">
                        <div className="flex text-slate-900 gap-1 mb-8">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
                            ))}
                        </div>

                        <blockquote className="text-2xl md:text-3xl text-slate-900 font-medium leading-relaxed mb-12 relative">
                            <span className="absolute -top-10 left-0 text-9xl text-slate-50 font-serif opacity-50 select-none">“</span>
                            " Their deep industry knowledge and practical strategies brought immediate results, driving our success. I wholeheartedly recommend."
                            <span className="absolute -bottom-20 right-0 text-9xl text-slate-50 font-serif opacity-50 select-none">”</span>
                        </blockquote>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-slate-100">
                            <div>
                                <h4 className="text-3xl font-bold text-slate-900 mb-1">7.9<span className="text-blue-600">%</span></h4>
                                <p className="text-slate-500 text-sm">ROI business growth</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-slate-900 mb-1">10<span className="text-blue-600">%</span></h4>
                                <p className="text-slate-500 text-sm">Business expanded</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-slate-900 mb-1">24<span className="text-blue-600">+</span></h4>
                                <p className="text-slate-500 text-sm">Team member added</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

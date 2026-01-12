"use client";

import { BarChart3, Presentation, TrendingUp, FileText } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const items = [
    {
        icon: BarChart3,
        title: "Strategy & Planning",
        desc: "Crafts a clear vision and roadmap for future",
    },
    {
        icon: Presentation,
        title: "Market Analysis",
        desc: "Crafts a clear vision and roadmap for future",
    },
    {
        icon: TrendingUp,
        title: "Financial Growth",
        desc: "Crafts a clear vision and roadmap for future",
    },
    {
        icon: FileText,
        title: "Reporting",
        desc: "Crafts a clear vision and roadmap for future",
    },
];

export default function Expertise() {
    const [activeIndex, setActiveIndex] = useState(1); // Default to second item active as per design

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 text-center">
                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-semibold text-sm mb-6">
                    Our Expertise
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-20 max-w-3xl mx-auto leading-tight">
                    Connecting businesses, people & ideas for the future.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {items.map((item, idx) => {
                        const isActive = idx === activeIndex;
                        const Icon = item.icon;

                        return (
                            <div
                                key={idx}
                                className={cn(
                                    "flex flex-col items-center group cursor-pointer transition-all duration-300",
                                    isActive ? "scale-105" : "hover:scale-105"
                                )}
                                onMouseEnter={() => setActiveIndex(idx)}
                            >
                                <div
                                    className={cn(
                                        "w-40 h-40 rounded-full flex items-center justify-center mb-8 border-2 transition-all duration-300",
                                        isActive
                                            ? "border-blue-600 bg-white shadow-xl"
                                            : "border-slate-200 bg-white hover:border-blue-400"
                                    )}
                                >
                                    <Icon
                                        size={48}
                                        className={cn(
                                            "transition-colors",
                                            isActive ? "text-blue-600" : "text-slate-700"
                                        )}
                                    />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-500 max-w-[200px] leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

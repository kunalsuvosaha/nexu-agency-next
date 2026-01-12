import Image from "next/image";

export default function Stats() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        We elevate businesses with custom software, product design, and business consulting.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {/* Card 1: 100% Rating */}
                    <div className="bg-slate-100 p-8 rounded-xl flex flex-col justify-center">
                        <h3 className="text-6xl font-bold text-slate-900 mb-2">100<span className="text-blue-600">%</span></h3>
                        <p className="text-xl font-bold text-slate-800 mb-2">Client happy rating</p>
                        <p className="text-slate-600">Craft a clear vision & roadmap for the future, tailored.</p>
                    </div>

                    {/* Card 2: Mechanics Image */}
                    <div className="relative rounded-xl overflow-hidden group">
                        <Image
                            src="/images/mechanics.png"
                            alt="Engineers working"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Card 3: 100+ Worldwide (Tall - Row Span 2) */}
                    <div className="bg-slate-900 p-8 rounded-xl md:row-span-2 relative overflow-hidden flex flex-col justify-between">
                        {/* Background Map Effect */}
                        <div className="absolute inset-0 bg-[url('/world-map.svg')] opacity-10 bg-no-repeat bg-center bg-contain" />

                        <div className="relative z-10">
                            <h3 className="text-6xl font-bold text-white mb-2">100<span className="text-blue-600">+</span></h3>
                        </div>

                        <div className="relative z-10">
                            <p className="text-xl font-bold text-white mb-2">Worldwide base</p>
                            <p className="text-slate-400">Craft a clear vision & roadmap for the future, tailored.</p>
                        </div>
                    </div>

                    {/* Card 4: Woman Tablet Image */}
                    <div className="relative rounded-xl overflow-hidden group">
                        <Image
                            src="/images/stats-woman.png"
                            alt="Business Analysis"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Card 5: 4.9% Growth */}
                    <div className="bg-blue-600 p-8 rounded-xl flex flex-col justify-center text-white">
                        <h3 className="text-6xl font-bold mb-2">4.9%</h3>
                        <p className="text-xl font-bold mb-2">Average company growth</p>
                        <p className="text-blue-100">Craft a clear vision & roadmap for the future, tailored.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

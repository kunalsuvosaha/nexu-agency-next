import Image from "next/image";

export default function Works() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
                    <div className="space-y-4">
                        <div className="inline-block px-4 py-2 border border-blue-200 text-blue-600 rounded-full font-semibold text-sm">
                            Case Study
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 max-w-2xl">
                            Day-to-day operations align with strategic goals
                        </h2>
                    </div>
                    <button className="px-8 py-3 rounded-full border border-slate-200 text-slate-900 font-semibold hover:bg-slate-50 transition">
                        More Works
                    </button>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Left Column: Images */}
                    <div className="space-y-8">
                        {/* Image 1: Mechanic - Full width */}
                        <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden group">
                            <Image
                                src="/images/works-mechanic.png"
                                alt="Mechanic Inspection"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-6 left-6 flex items-center gap-2 text-white">
                                <div className="w-6 h-6 bg-white/20 backdrop-blur rounded flex items-center justify-center">L</div>
                                <span className="font-semibold">Logoipsum</span>
                            </div>
                        </div>

                        {/* Image 2 & 3: Split */}
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                            <div className="relative h-64 w-full rounded-2xl overflow-hidden group">
                                <Image
                                    src="/images/works-wind.png"
                                    alt="Renewable Energy"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-6 left-6 flex items-center gap-2 text-white">
                                    <div className="w-6 h-6 bg-white/20 backdrop-blur rounded flex items-center justify-center">L</div>
                                    <span className="font-semibold">Logoipsum</span>
                                </div>
                            </div>

                            <div className="relative h-64 w-full rounded-2xl overflow-hidden group">
                                <Image
                                    src="/images/works-office.png"
                                    alt="Office Interior"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-6 left-6 flex items-center gap-2 text-white">
                                    <div className="w-6 h-6 bg-white/20 backdrop-blur rounded flex items-center justify-center">L</div>
                                    <span className="font-semibold">Logoipsum</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Stats Blocks */}
                    <div className="space-y-8 h-full">

                        {/* Stat 1 */}
                        <div className="bg-slate-100 p-12 rounded-2xl h-[340px] flex flex-col justify-center">
                            <h3 className="text-7xl font-bold text-slate-900 mb-4">7.9<span className="text-blue-600">%</span></h3>
                            <p className="text-lg text-slate-600">ROI business growth</p>
                        </div>

                        {/* Stat 2 */}
                        <div className="bg-slate-900 p-12 rounded-2xl h-[280px] flex flex-col justify-center text-white relative overflow-hidden">
                            <div className="absolute right-0 bottom-0 opacity-10">
                                {/* Decorative R */}
                                <span className="text-[200px] leading-none font-bold">R</span>
                            </div>
                            <h3 className="text-7xl font-bold mb-4">2.7<span className="text-blue-600">%</span></h3>
                            <p className="text-lg text-slate-400">ROI business growth</p>
                        </div>

                        {/* Stat 3 */}
                        <div className="bg-blue-600 p-12 rounded-2xl h-[280px] flex flex-col justify-center text-white">
                            <h3 className="text-7xl font-bold mb-4">4.5<span className="text-white opacity-50">%</span></h3>
                            <p className="text-lg text-blue-100">ROI business growth</p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

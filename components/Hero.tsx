import Image from "next/image";


export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 overflow-hidden">
            {/* Background Shapes/Overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

            {/* Header / Nav */}
            <div className="absolute top-0 left-0 w-full px-6 py-6 flex justify-between items-center z-50">
                <div className="flex items-center gap-2 text-white">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-blue-600 font-bold">C</div>
                    <span className="text-xl font-bold tracking-tight">Consulto</span>
                </div>
                <nav className="flex items-center gap-6">
                    <button className="bg-white text-blue-600 px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-50 transition shadow-lg">Home</button>
                    <button className="bg-white text-blue-600 px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-50 transition shadow-lg">Contact</button>
                    <button className="bg-white text-blue-600 px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-50 transition shadow-lg">About</button>
                </nav>
            </div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 mt-8">
                <div className="space-y-6 text-white">
                    {/* Logo was here, moved up */}

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        Victory <br />
                        With <span className="italic font-serif">Strategic</span> <br />
                        Brilliance
                    </h1>

                    <p className="text-lg md:text-xl text-blue-100 max-w-lg">
                        At Consulto Inc. we specialize in transforming challenges into opportunities.
                    </p>

                    <div className="flex gap-4">
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
                            Our Expertise
                        </button>
                    </div>
                </div>

                <div className="relative h-[80vh] w-full hidden md:block">
                    <Image
                        src="/images/hero-woman.png"
                        alt="Professional Business Woman"
                        fill
                        className="object-cover object-top rounded-t-[100px] mt-20 z-20 relative"
                        priority
                    />
                    {/* Decorative elements behind image */}
                    <div className="absolute top-20 right-10 w-full h-full bg-blue-500/20 rounded-t-[100px] -translate-x-4 translate-y-4 blur-2xl top-20" />


                    {/* Overlapping Rating Card */}
                    <div className="bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 absolute -left-12 bottom-20 min-w-[200px] z-30">
                        <div className="flex -space-x-3">
                            <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                                <Image src="/images/avatar.png" alt="User" fill className="object-cover" />
                            </div>
                            <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300" />
                            <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-400" />
                        </div>
                        <div>
                            <div className="flex text-yellow-500 text-[10px] gap-0.5">
                                {[1, 2, 3, 4, 5].map(i => <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>)}
                            </div>
                            <p className="text-xs font-bold text-slate-900 leading-none mt-1">4.9 User Rating</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

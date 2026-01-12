

export default function Sponsors() {
    return (
        <section className="py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left: Text Content */}
                <div className="space-y-8">
                    <div className="inline-block px-4 py-2 border border-slate-700 text-slate-300 rounded-full font-semibold text-sm">
                        Sponsors
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Meet with some happy sponsors.
                    </h2>

                    <p className="text-slate-400 text-lg max-w-md">
                        Without a robust strategy and detailed planning, businesses often lose direction, miss opportunities, or waste resources.
                    </p>

                    <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition">
                        Book Appointment
                    </button>
                </div>

                {/* Right: Logos Grid */}
                <div className="grid grid-cols-2 gap-6">
                    {/* Logo Box 1 */}
                    <div className="bg-slate-800 p-8 rounded-xl flex items-center justify-center opacity-80 hover:opacity-100 transition">
                        <div className="flex items-center gap-2 font-bold text-xl">
                            <div className="w-6 h-6 rounded-full border-2 border-white" />
                            Logoipsum
                        </div>
                    </div>
                    {/* Logo Box 2 */}
                    <div className="bg-slate-800 p-8 rounded-xl flex items-center justify-center opacity-80 hover:opacity-100 transition">
                        <div className="flex items-center gap-2 font-bold text-xl">
                            <div className="w-6 h-6 border rotate-45 border-white" />
                            Logoipsum
                        </div>
                    </div>
                    {/* Logo Box 3 */}
                    <div className="bg-slate-800 p-8 rounded-xl flex items-center justify-center opacity-80 hover:opacity-100 transition">
                        <div className="flex items-center gap-2 font-bold text-xl">
                            <div className="w-4 h-4 bg-slate-500 rounded-sm" />
                            <div className="w-4 h-4 bg-slate-400 rounded-full" />
                            logoipsum
                        </div>
                    </div>
                    {/* Logo Box 4 */}
                    <div className="bg-slate-800 p-8 rounded-xl flex items-center justify-center opacity-80 hover:opacity-100 transition">
                        <div className="flex items-center gap-2 font-bold text-xl">
                            <div className="text-2xl">❖</div>
                            Logoipsum
                        </div>
                    </div>
                    {/* Logo Box 5 */}
                    <div className="bg-slate-800 p-8 rounded-xl flex items-center justify-center opacity-80 hover:opacity-100 transition">
                        <div className="flex items-center gap-2 font-bold text-xl">
                            <div className="w-6 h-6 rounded-full border-2 border-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-3 h-3 bg-white" />
                            </div>
                            Logoipsum
                        </div>
                    </div>
                    {/* Logo Box 6 */}
                    <div className="bg-slate-800 p-8 rounded-xl flex items-center justify-center opacity-80 hover:opacity-100 transition">
                        <div className="flex items-center gap-2 font-bold text-xl">
                            <div className="w-6 h-6 border-2 border-white rounded-tr-xl" />
                            logoipsum
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

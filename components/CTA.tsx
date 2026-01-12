
export default function CTA() {
    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Text */}
                <h2 className="text-6xl md:text-8xl font-bold text-slate-900 tracking-tight">
                    Hire us today
                </h2>

                {/* Decorative Circle & Button */}
                <div className="flex items-center gap-8 md:gap-16">
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 blur-2xl opacity-80" />

                    <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 whitespace-nowrap">
                        Book Appointment
                    </button>
                </div>
            </div>

            {/* Footer copyright */}
            <div className="container mx-auto px-6 mt-24 pt-8 border-t border-slate-100 text-center text-slate-400 text-sm">
                © 2026 Consulto Inc. All rights reserved.
            </div>
        </section>
    );
}

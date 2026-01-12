import Image from "next/image";

const blogs = [
    {
        image: "/images/blog-workers.png",
        category: "Finance",
        date: "June 21, 2025",
        title: "Crafting a clear vision & roadmap for the future, tailored to your business goals."
    },
    {
        image: "/images/blog-mechanic.png",
        category: "Finance",
        date: "June 21, 2025",
        title: "Setting measurable benchmarks to track progress and success."
    },
    {
        image: "/images/blog-port.png",
        category: "Finance",
        date: "June 21, 2025",
        title: "Without a robust strategy and detailed planning, businesses often lose direction."
    }
];

export default function Blog() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 border border-slate-200 text-blue-600 rounded-full font-semibold text-sm mb-6">
                        Blog & Insights
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                        Company news & udpates
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogs.map((blog, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex justify-between items-center text-sm mb-3">
                                <span className="text-blue-600 font-semibold">{blog.category}</span>
                                <span className="text-slate-400">{blog.date}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                                {blog.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

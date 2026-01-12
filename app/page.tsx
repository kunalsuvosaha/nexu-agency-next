import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Expertise from "@/components/Expertise";
import Works from "@/components/Works";
import Sponsors from "@/components/Sponsors";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Stats />
      <Expertise />
      <Works />
      <Sponsors />
      <Testimonials />
      <Blog />
      <Footer />
    </main>
  );
}

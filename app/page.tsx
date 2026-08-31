import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import IntroLoader from "@/components/IntroLoader";


export default function Home() {
  return (
    <main className="mx-auto max-w-[1490px] min-h-screen w-full bg-[#FFFAF0] text-[#DC143C]">
      
      
      <Navbar />
      <IntroLoader />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
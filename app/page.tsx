import About from "@/components/about";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Menubar from "@/components/menubar";
import Projects from "@/components/projects";

export default function Page() {
  return (
    <div className="flex flex-col items-center grid-bg">
      <Menubar />
      <div className="container relative flex flex-col">
        {/* <div className="absolute inset-0 bg-halftone-fade" /> */}
        <Hero />
        <About />
        <Projects />
        <Experience />
      </div>
      <div className="w-full bg-zinc-950 p-4 flex items-center justify-center">
        <Footer />
      </div>
    </div>
  )
}

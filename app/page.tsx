import About from "@/components/about";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Menubar from "@/components/menubar";
import Projects from "@/components/projects";

export default function Page() {
  return (
    <>
      <div className="container relative flex flex-col grid-bg">
        {/* <div className="absolute inset-0 bg-halftone-fade" /> */}
        <Menubar />
        <Hero />
        <About />
        <Projects />
        <Experience />
      </div>
      <div className="w-full bg-zinc-950 p-4 flex items-center justify-center">
        <Footer />
      </div>
    </>
  )
}

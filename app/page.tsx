import About from "@/components/about";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Menubar from "@/components/menubar";
import Projects from "@/components/projects";
import ScrollToTop from "@/components/scrollToTop";
import Testimonials from "@/components/testimonials";

export default function Page() {
  return (
    <div className="flex relative flex-col items-center grid-bg">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-primary focus:text-black focus:px-4 focus:py-2 focus:font-bold"
      >
        Skip to main content
      </a>
      <Menubar />
      <ScrollToTop />
      <main id="main-content" className="container relative flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
      </main>
      <div className="w-full bg-zinc-950 p-4 flex items-center justify-center">
        <Footer />
      </div>
    </div>
  )
}

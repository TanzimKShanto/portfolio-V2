"use client"
import ContactMeFormDialog from "./contactMeFormDialog";
import { DecryptingText } from "./custom_ui/decrypting";
import MapBanner from "./map";
import { Button } from "./ui/button";

const Intro = () => {
  return (
    <div className="sm:w-265 w-full h-62.5 flex flex-col items-center justify-end  relative">
      <div className="absolute top-0 right-0">
        <MapBanner />
      </div>
      <div className="sm:w-5xl max-sm:px-4 w-full py-4 flex text-accent flex-row z-10 self-center items-end justify-between relative">
        <div className="flex flex-col gap-2 justify-center">
          <h1 className="sm:text-xl text-zinc-900 dark:text-zinc-300">Hi, my name is</h1>
          <h1 className="sm:text-4xl text-2xl font-bold flex flex-col text-zinc-900 dark:text-zinc-300">
            Tanzim Khan Shanto.
          </h1>
        </div>
        {/* <div className="flex flex-row relative items-center justify-center w-50 h-50 rotate-2 hover:animate-wiggle"> */}
        {/*   <img src="/images/self-photo-nobg.png" alt="Hero" className="h-full w-full bg-radial-[at_85%_15%] from-white to-primary to-75% touch-manipulation" /> */}
        {/* </div> */}
      </div >
    </div>
  )
}

export default function Hero() {
  const heroText = "I build fast, scalable web applications—along with tools and systems beyond the web—with a strong foundation in algorithms, performance, and system architecture.";
  return (
    <>
      <div className="sm:w-265 w-full pb-16 flex flex-col  justify-center self-center">
        <Intro />
        <div className="sm:w-5xl max-sm:px-4 w-full self-center py-2 relative flex flex-col justify-center gap-8">
          {/* <div className="absolute h-8 w-8  border-t-3 border-l-3 border-primary -top-12 -left-12" /> */}
          {/* <div className="absolute h-8 w-8  border-b-3 border-r-3 border-primary bottom-0 right-0" /> */}
          <div className="flex flex-col gap-2">
            <span className="sm:text-sm text-xs text-muted-foreground pt-2">Software Developer · System Designer · Problem Solver</span>
            <div className="sm:w-5xl w-full relative">
              <DecryptingText className="absolute inset-0 max-sm:text-sm" targetText={heroText} speed={0.5} />
              <h1 className="opacity-0 max-sm:text-sm">{heroText}</h1>
            </div>
          </div>
          <div className="self-start sm:w-5xl w-full flex flex-row gap-4">
            <ContactMeFormDialog />
            <Button
              variant={"outline"}
              onClick={() => window.open("/pdf/resume.pdf", "_blank")}
            >
              Get Resume
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

"use client"
import { IconBrandGithub, IconExternalLink, } from "@tabler/icons-react"
import { Badge } from "./ui/badge"
import { useRef } from "react"
import { Button } from "./ui/button"

export default function Projects() {
  const projects = [
    {
      title: "Resource Hub",
      type: "Web App",
      badgeColor: "bg-green-400",
      description: "A web platform where users can request books, download books, and subscribe to a newsletter – all in a seamless, secure, and responsive experience.",
      liveLink: "https://r-hub.xyz",
      gitLink: "https://github.com/tanzimKshanto/resource-hub",
      stacks: ["Next.js", "TypeScript", "Firebase", "Shadcn/UI"],
      img: "/images/resourceHub.png",
      hasLive: true,
      hasGit: true
    },
    {
      title: "PaiPixel",
      type: "Web App",
      badgeColor: "bg-green-400",
      description: "Pai Pixel is a modern agency website built to showcase AI-powered digital marketing and web development services, featuring a clean design, smooth interactions, and a scalable structure optimized for performance and conversions.",
      liveLink: "https://paipixel.com",
      stacks: ["Astro.js", "Github Workflows", "Radix", "Framer Motion", "CI/CD",],
      img: "/images/paipixel.png",
      hasLive: true,
      hasGit: false
    },
    {
      title: "NetMeter Lite",
      type: "Windows Software",
      badgeColor: "bg-red-400",
      description: "NetMeter Lite is a lightweight, real-time monitoring tool for network speed, CPU, and memory usage, offering a simple and customizable interface for Windows. Perfect for users who want to keep track of their device’s performance without any hassle.",
      gitLink: "https://github.com/tanzimKshanto/NetMeter-Lite",
      stacks: ["Python", "Tkinter", "Pyinstaller", "Pywin32"],
      img: "/images/netmeterLite.png",
      hasLive: false,
      hasGit: true
    },
    // {
    //   title: "Media Rush",
    //   type: "Discord Bot",
    //   badgeColor: "bg-blue-400",
    //   description: "MediaRush is a lightweight and smart Discord bot that automatically converts social media links into direct downloadable media and can post the latest images or videos from selected subreddits to a chosen channel. It’s perfect for media-sharing communities that want instant previews and clean downloads.",
    //   gitLink: "https://github.com/tanzimKshanto/mediarush",
    //   stacks: ["Python", "Discord.py", "Ffmpeg"],
    //   img: "/images/mediaRush.jpg",
    //   hasLive: false
    // },
  ]

  const stackRefs = useRef<Record<string, HTMLSpanElement | null>>({});

  return (
    <div id="projects" className="sm:w-5xl w-full max-sm:px-4 py-12 self-center flex flex-col gap-4">
      <div className="flex flex-row items-center justify-between">
        <div className="font-bold inline-flex whitespace-nowrap items-center text-2xl sm:text-4xl">
          <span className="text-primary">02.</span>
          Featured Projects
        </div>
        <Button
          variant="outline"
          className="max-sm:hidden"
          onClick={() => window.open("https://github.com/tanzimKshanto", "_blank")}
        >
          View All
        </Button>
      </div>
      <div className="flex flex-col gap-10">

        {projects.map((project, index) => (
          <a
            href={project.hasLive ? project.liveLink : project.gitLink}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="grid sm:grid-cols-10 grid-cols-1 gap-4 group cursor-pointer hover:bg-primary/10 border-t-2 border-t-transparent hover:border-t-primary/30 transition-all hover:shadow-md p-4">
            <div className={`aspect-5/3 sm:row-span-full sm:col-span-5 ${index & 1 ? "sm:col-end-11" : "sm:col-start-1"} relative`}>
              {/* <div className="absolute inset-0 bg-primary mix-blend-screen group-hover:bg-transparent transition-all" /> */}
              <img src={project.img} alt={project.title} className={`h-full w-full border-2 border-zinc-200 group-hover:border-zinc-300 transition-all`} />
            </div>

            <div className={`flex flex-col justify-center sm:col-span-5 ${index & 1 ? "sm:col-start-1 sm:items-start" : "sm:col-end-11 sm:items-end"} sm:row-span-full z-10 gap-6`}>
              <div
                className={`font-bold flex max-sm:justify-between sm:flex-col ${index & 1 ? "sm:items-start flex-row" : "sm:items-end flex-row-reverse"} gap-1`}
              >
                {/* <Badge className={project.badgeColor}>{project.type}</Badge> */}

                <div className={`flex flex-col ${index & 1 ? "items-start" : "items-end"}`}>
                  <span className="text-sm text-primary">{project.type}</span>
                  <span className="text-xl transition-all">
                    {project.title}
                  </span>
                </div>
                <div className="flex flex-row gap-2 z-20 sm:hidden">
                  {project.hasGit &&
                    <div onClick={() => window.open(project.gitLink, "_blank")} >
                      <IconBrandGithub size={20} className="hover:text-primary transition-all" />
                    </div>
                  }
                  {project.hasLive &&
                    <div onClick={() => window.open(project.liveLink, "_blank")}>
                      <IconExternalLink size={20} className="hover:text-primary transition-all" />
                    </div>
                  }
                </div>

              </div>

              <div className={`text-card-foreground ${index & 1 ? "text-left" : "text-right"} p-2 relative text-sm `}>
                <div className="absolute h-4 w-4  border-t-3 border-l-3 border-primary top-0 left-0" />
                <div className="absolute h-4 w-4  border-b-3 border-r-3 border-primary bottom-0 right-0" />
                {project.description}
              </div>
              <div className="flex flex-row gap-2 flex-wrap sm:hidden">
                {project.stacks.map((item, index) => (
                  <Badge key={index}>{item}</Badge>
                ))}
              </div>
              <div className="relative group h-5 max-sm:hidden">
                {project.stacks.sort((a, b) => a.length - b.length).map((item, bIndex) => (
                  <Badge
                    key={bIndex}
                    ref={(el) => {
                      if (!el) return;

                      const stackKey = `${project.title}-${bIndex}`;
                      stackRefs.current[stackKey] = el;

                      let totalWidth = 0;
                      const GAP = 2;

                      for (let i = 0; i < bIndex; i++) {
                        const prevEl = stackRefs.current[`${project.title}-${i}`];
                        if (prevEl) {
                          totalWidth += prevEl.offsetWidth;
                        }
                      }

                      totalWidth += GAP * bIndex;

                      el.style.setProperty("--w", `${totalWidth}px`);
                    }}
                    style={{
                      "--i": bIndex,
                    } as React.CSSProperties}
                    className={`
                      absolute ${index & 1 ? "left-[calc(var(--i)*4px)]" : "right-[calc(var(--i)*4px)]"} top-0
                      translate-x-0
                      transition-transform duration-300 ease-out
                      border
                      border-accent
                      group-hover:opacity-100
                      ${index & 1 ? "group-hover:translate-x-[calc(var(--w))]" : "group-hover:-translate-x-[calc(var(--w))]"}
                    `}
                  >
                    {item}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-row gap-2 z-20 max-sm:hidden">
                {project.hasGit &&
                  <div onClick={() => window.open(project.gitLink, "_blank")} >
                    <IconBrandGithub className="hover:text-primary transition-all" />
                  </div>
                }
                {project.hasLive &&
                  <div onClick={() => window.open(project.liveLink, "_blank")}>
                    <IconExternalLink className="hover:text-primary transition-all" />
                  </div>
                }
              </div>
              {/* <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">View on GitHub</a> */}
            </div>
          </a>
        ))}
      </div>
      <Button
        variant="outline"
        className="sm:hidden"
        onClick={() => window.open("https://github.com/tanzimKshanto", "_blank")}
      >
        View All
      </Button>
    </div>
  )
}

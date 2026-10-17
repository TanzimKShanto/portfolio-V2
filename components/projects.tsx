"use client"
import { IconBrandGithub, IconExternalLink, } from "@tabler/icons-react"
import { Badge } from "./ui/badge"
import { useRef } from "react"
import ProjectCarousel from "./projectCarousel"
import ProjectArchive from "./projectArchive"
import { archivedProjects, featuredProjects } from "@/lib/projects"

export default function Projects() {
  const stackRefs = useRef<Record<string, HTMLSpanElement | null>>({});

  return (
    <div id="projects" className="sm:w-5xl w-full max-sm:px-4 py-12 self-center flex flex-col gap-4">
      <h2 className="font-bold inline-flex whitespace-nowrap items-center text-2xl sm:text-4xl">
        <span className="text-primary">02.</span>
        Featured Projects
      </h2>
      <div className="flex flex-col gap-10">

        {featuredProjects.map((project, index) => {
          const primaryLink = project.liveLink ?? project.gitLink;
          return (
            <div
              key={project.slug}
              className="grid sm:grid-cols-10 grid-cols-1 gap-4 group hover:bg-primary/10 border-t-2 border-t-transparent hover:border-t-primary/30 transition-all hover:shadow-md p-4">
              <div className={`aspect-99/79 sm:row-span-full sm:p-6 sm:col-span-5 ${index & 1 ? "sm:col-end-11" : "sm:col-start-1"} relative`}>
                <ProjectCarousel
                  images={project.images}
                  alt={project.title}
                  className="border-2 border-zinc-200 group-hover:border-zinc-300 transition-all"
                />
              </div>

              <div className={`flex flex-col justify-center sm:col-span-5 ${index & 1 ? "sm:col-start-1 sm:items-start" : "sm:col-end-11 sm:items-end"} sm:row-span-full z-10 gap-6`}>
                <div
                  className={`font-bold flex max-sm:justify-between sm:flex-col ${index & 1 ? "sm:items-start flex-row" : "sm:items-end flex-row-reverse"} gap-1`}
                >
                  <div className={`flex flex-col ${index & 1 ? "items-start" : "items-end"}`}>
                    <span className="text-sm text-primary">{project.type}</span>
                    {primaryLink ? (
                      <a
                        href={primaryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl transition-all hover:text-primary"
                      >
                        {project.title}
                      </a>
                    ) : (
                      <span className="text-xl transition-all">{project.title}</span>
                    )}
                  </div>
                  <div className="flex flex-row gap-2 z-20 sm:hidden">
                    {project.gitLink &&
                      <a href={project.gitLink} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository`}>
                        <IconBrandGithub size={20} className="hover:text-primary transition-all" />
                      </a>
                    }
                    {project.liveLink &&
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}>
                        <IconExternalLink size={20} className="hover:text-primary transition-all" />
                      </a>
                    }
                  </div>
                </div>

                <div className={`text-card-foreground ${index & 1 ? "text-left" : "text-right"} p-2 relative text-sm `}>
                  <div className="absolute h-4 w-4  border-t-3 border-l-3 border-primary top-0 left-0" aria-hidden="true" />
                  <div className="absolute h-4 w-4  border-b-3 border-r-3 border-primary bottom-0 right-0" aria-hidden="true" />
                  {project.description}
                </div>
                <div className="flex flex-row gap-2 flex-wrap sm:hidden">
                  {project.stacks.map((item, i) => (
                    <Badge key={i}>{item}</Badge>
                  ))}
                </div>
                <div className="relative group h-5 max-sm:hidden">
                  {[...project.stacks].sort((a, b) => a.length - b.length).map((item, bIndex) => (
                    <Badge
                      key={bIndex}
                      ref={(el) => {
                        if (!el) return;

                        const stackKey = `${project.slug}-${bIndex}`;
                        stackRefs.current[stackKey] = el;

                        let totalWidth = 0;
                        const GAP = 2;

                        for (let i = 0; i < bIndex; i++) {
                          const prevEl = stackRefs.current[`${project.slug}-${i}`];
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
                  {project.gitLink &&
                    <a href={project.gitLink} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository`}>
                      <IconBrandGithub className="hover:text-primary transition-all" />
                    </a>
                  }
                  {project.liveLink &&
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}>
                      <IconExternalLink className="hover:text-primary transition-all" />
                    </a>
                  }
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-6 pt-8">
        <h2 className="font-bold inline-flex whitespace-nowrap items-center text-2xl sm:text-4xl">
          <span className="text-primary">+</span>
          More Projects
        </h2>
        <ProjectArchive projects={archivedProjects} />
      </div>
    </div>
  )
}

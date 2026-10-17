"use client"

import { useState } from "react"
import type { Project } from "@/lib/projects"
import { Badge } from "./ui/badge"
import ProjectDialog from "./projectDialog"

export default function ProjectArchive({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<Project | null>(null)
  const [open, setOpen] = useState(false)

  const handleOpen = (project: Project) => {
    setSelected(project)
    setOpen(true)
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <button
            key={project.slug}
            type="button"
            onClick={() => handleOpen(project)}
            aria-label={`View details for ${project.title}`}
            className="group flex flex-col border border-zinc-200 bg-card text-left transition-all hover:border-primary/40 hover:shadow-md focus-visible:outline-2 focus-visible:outline-primary dark:border-zinc-800"
          >
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={project.images[0]}
                alt={`${project.title} preview`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-2 p-4">
              <span className="text-xs text-primary">{project.type}</span>
              <h3 className="text-sm font-bold">{project.title}</h3>
              <div className="flex flex-row flex-wrap gap-1.5">
                {project.stacks.slice(0, 3).map((stack, i) => (
                  <Badge variant="secondary" key={i}>{stack}</Badge>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      <ProjectDialog project={selected} open={open} onOpenChange={setOpen} />
    </>
  )
}

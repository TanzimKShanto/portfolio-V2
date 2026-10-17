"use client"

import { useEffect } from "react"
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { useLenisInstance } from "@/hooks/useLenis"
import type { Project } from "@/lib/projects"

type ProjectDialogProps = {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ProjectDialog({ project, open, onOpenChange }: ProjectDialogProps) {
  const lenis = useLenisInstance()

  useEffect(() => {
    if (!lenis) return
    if (open) {
      lenis.stop()
      return () => lenis.start()
    }
  }, [open, lenis])

  if (!project) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent data-lenis-prevent className="max-h-[90vh] gap-4 overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <span className="text-xs text-primary">{project.type}</span>
          <DialogTitle className="text-lg font-bold">{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-3">
          {project.images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${project.title} screenshot ${i + 1}`}
              loading="lazy"
              className="w-full border border-zinc-200 dark:border-zinc-800"
            />
          ))}
        </div>

        <div className="flex flex-row flex-wrap gap-2">
          {project.stacks.map((stack, i) => (
            <Badge variant="secondary" key={i}>{stack}</Badge>
          ))}
        </div>

        {(project.gitLink || project.liveLink) && (
          <div className="flex flex-row gap-2">
            {project.gitLink && (
              <Button variant="outline" asChild>
                <a
                  href={project.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                >
                  <IconBrandGithub size={18} />
                  Code
                </a>
              </Button>
            )}
            {project.liveLink && (
              <Button asChild>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live`}
                >
                  <IconExternalLink size={18} />
                  Live
                </a>
              </Button>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

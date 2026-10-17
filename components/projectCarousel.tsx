"use client"

import { useState } from "react"
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"
import { cn } from "@/lib/utils"

type ProjectCarouselProps = {
  images: string[]
  alt: string
  className?: string
}

export default function ProjectCarousel({ images, alt, className }: ProjectCarouselProps) {
  const [index, setIndex] = useState(0)
  const count = images.length

  if (count === 0) return null

  const go = (next: number) => setIndex(((next % count) + count) % count)
  const prev = () => go(index - 1)
  const next = () => go(index + 1)

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault()
      prev()
    } else if (e.key === "ArrowRight") {
      e.preventDefault()
      next()
    }
  }

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={`${alt} screenshots`}
      tabIndex={0}
      onKeyDown={onKeyDown}
      className={cn(
        "group/carousel relative h-full w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-primary",
        className
      )}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${alt} screenshot ${i + 1}`}
          aria-hidden={i !== index}
          loading={i === 0 ? "eager" : "lazy"}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-300",
            i === index ? "opacity-100" : "opacity-0"
          )}
        />
      ))}

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="absolute top-1/2 left-2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-zinc-300 bg-background/80 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground dark:border-zinc-700"
          >
            <IconChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute top-1/2 right-2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-zinc-300 bg-background/80 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground dark:border-zinc-700"
          >
            <IconChevronRight size={18} />
          </button>

          <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 flex-row gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  "h-1.5 w-4 border border-primary transition-colors",
                  i === index ? "bg-primary" : "bg-background/70"
                )}
              />
            ))}
          </div>

          <div className="absolute top-2 right-2 z-10 border border-zinc-300 bg-background/80 px-2 py-0.5 text-[10px] font-medium dark:border-zinc-700">
            {index + 1} / {count}
          </div>

          <span className="sr-only" aria-live="polite">
            Image {index + 1} of {count}
          </span>
        </>
      )}
    </div>
  )
}

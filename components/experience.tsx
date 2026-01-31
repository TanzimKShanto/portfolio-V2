"use client"
import { Badge } from "./ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"

export default function Experience() {
  const experienceData = [
    {
      title: "Full Stack Developer",
      company: "PaiPixel",
      location: "Remote",
      duration: "2025 - Present",
      stacks: ["NextJs", "DndKit", "Typescript", "CI/CD", "Go Lang", "Astro"],
      responsibilities: [
        "Build type-safe frontends using Next.js and Astro",
        "Develop a custom drag-and-drop form builder with DnD Kit",
        "Implement pixel-perfect, fully responsive UIs from Figma designs",
        "Collaborate with cross-functional teams to ensure efficient delivery",
        "Develop high-performance backend services using Go",
      ]
    },
    {
      title: "Full Stack Developer",
      company: "BzrLab",
      location: "Remote",
      duration: "2025",
      stacks: ["NextJs", "NestJs", "Svelte", "WebSockets", "Redis", "Postgres", "CockroachDB", "Prisma", "Drizzle"],
      responsibilities: [
        "Scalable full-stack apps with PostgreSQL & CockroachDB",
        "REST & GraphQL APIs for modern frontends",
        "Real-time chat using NestJS & WebSockets",
        "Clean client–server integration with Git/GitHub",
      ]
    }
  ]
  return (
    <div id="experience" className="sm:w-5xl w-full max-sm:px-4 py-12 flex flex-col self-center gap-8">
      <h1 className="font-bold sm:text-4xl text-2xl">
        <span className="text-primary">03.</span>
        Experience
      </h1>
      <div className="flex flex-col gap-4 relative">
        <img src="/images/cat-pixel-sticker.gif" alt="Hero" className="h-20 w-20 absolute -top-14 right-2 z-10 touch-manipulation" />
        {experienceData.map((experience, index) => (
          <div key={index} className="flex flex-row sm:gap-8 gap-4">
            <div className="flex flex-col items-center gap-1">
              <div className="flex flex-row gap-2">
                {/* <Badge className="absolute sharp-right right-8 pr-4">{experience.duration}</Badge> */}
                <div className="h-5 w-5 bg-primary border-4 border-zinc-300" />
              </div>
              <div className="h-full w-0.5 bg-zinc-300" />
            </div>
            <Card className="w-full relative">
              <div className="absolute h-4 w-4  border-t-3 border-l-3 border-primary top-0 left-0" />
              <div className="absolute h-4 w-4  border-b-3 border-r-3 border-primary bottom-0 right-0" />
              <CardHeader className="">
                <CardTitle className="flex flex-row justify-between">
                  {experience.title}
                  <Badge>{experience.duration}</Badge>
                </CardTitle>
                <CardDescription><span className="text-accent-foreground">{experience.company}</span> · {experience.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <CardDescription>Key Contributions:</CardDescription>
                  <ul className="list-disc pl-6">
                    {experience.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                {experience.stacks.map((stack, index) => (
                  <Badge variant={"secondary"} key={index}>{stack}</Badge>
                ))}
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

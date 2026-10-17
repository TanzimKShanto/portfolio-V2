export type Project = {
  slug: string
  title: string
  type: string
  description: string
  stacks: string[]
  images: string[]
  featured: boolean
  liveLink?: string
  gitLink?: string
}

const projectImages = (slug: string) =>
  [1, 2, 3].map((n) => `/images/projects/${slug}/${n}.webp`)

export const projects: Project[] = [
  {
    slug: "team-hub",
    title: "Collaborative Team Hub",
    type: "Web App",
    description:
      "A full-stack team collaboration platform built as a Turborepo monorepo, featuring workspaces, goals, announcements, and a drag-and-drop Kanban board. JWT authentication with httpOnly cookies, role-based access control, and optimistic UI updates deliver a secure, snappy experience, while Socket.io powers real-time updates and presence. Deployed on a private VPS with Docker.",
    stacks: ["Turborepo", "Next.js", "TypeScript", "PostgreSQL", "Socket.io", "Docker"],
    images: projectImages("team-hub"),
    featured: true,
    liveLink: "https://frontend.r-hub.xyz",
    gitLink: "https://github.com/TanzimKShanto/team-hub",
  },
  {
    slug: "chat-system",
    title: "Realtime Chat",
    type: "Web App",
    description:
      "Built a modern real-time chat app with instant messaging via WebSockets, supporting reactions, threaded replies, message pinning, jump-to-latest, and a responsive UI that works smoothly across devices.",
    stacks: ["WebSockets", "Next.js", "Nest.js", "Redis", "TypeScript"],
    images: projectImages("chat-system"),
    featured: true,
  },
  {
    slug: "reellium",
    title: "Reellium",
    type: "Automation Pipeline",
    description:
      "An automated cross-platform content pipeline that scrapes image posts from multiple TikTok channels with Playwright and stores metadata in SQLite. Scheduled posting to Instagram, Facebook, TikTok, and YouTube runs through each platform's API with per-platform error handling and retries, orchestrated by GitHub Actions — saving the client hours of manual work daily.",
    stacks: ["Python", "HTMX", "FastAPI", "REST API", "Playwright", "SQLite"],
    images: projectImages("reellium"),
    featured: true,
  },
  {
    slug: "drag-and-drop",
    title: "Drag-and-Drop Form Builder",
    type: "Web App",
    description:
      "Built an interactive drag-and-drop assessment builder that lets users visually create, reorder, and edit forms or tests in real time—no coding required. Features a responsive, intuitive interface and scalable architecture for smooth handling of complex assessments.",
    stacks: ["Next.js", "TypeScript", "Figma", "DnD Kit"],
    images: projectImages("drag-and-drop"),
    featured: true,
  },
  {
    slug: "pixel-perfect-agency",
    title: "PaiPixel",
    type: "Web App",
    description:
      "Pai Pixel is a modern agency website built to showcase AI-powered digital marketing and web development services, featuring a clean design, smooth interactions, and a scalable structure optimized for performance and conversions.",
    stacks: ["Astro.js", "GitHub Workflows", "Radix", "Framer Motion", "CI/CD"],
    images: projectImages("pixel-perfect-agency"),
    featured: false,
    liveLink: "https://paipixel.com",
  },
  {
    slug: "resource-hub",
    title: "Resource Hub",
    type: "Web App",
    description:
      "A web platform where users can request books, download books, and subscribe to a newsletter – all in a seamless, secure, and responsive experience.",
    stacks: ["Next.js", "TypeScript", "Firebase", "Shadcn/UI"],
    images: projectImages("resource-hub"),
    featured: false,
    liveLink: "https://r-hub.xyz",
    gitLink: "https://github.com/tanzimKshanto/resource-hub",
  },
  {
    slug: "net-meter-lite",
    title: "NetMeter Lite",
    type: "Windows Software",
    description:
      "NetMeter Lite is a lightweight, real-time monitoring tool for network speed, CPU, and memory usage, offering a simple and customizable interface for Windows. Perfect for users who want to keep track of their device's performance without any hassle.",
    stacks: ["Python", "Tkinter", "Pyinstaller", "Pywin32"],
    images: projectImages("net-meter-lite"),
    featured: false,
    gitLink: "https://github.com/tanzimKshanto/NetMeter-Lite",
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const archivedProjects = projects.filter((p) => !p.featured)

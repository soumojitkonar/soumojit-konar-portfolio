import type React from "react"
import { Button } from "@/components/ui/button"
import { BookOpen, Bot, Brain, Globe, LineChart, Github, ExternalLink } from "lucide-react"

type Project = {
  title: string
  tagline: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  github?: string
  demo?: string
  upcoming?: boolean
}

const projects: Project[] = [
  {
    title: "Algo Visualizer",
    tagline: "Interactive animations for sorting & pathfinding.",
    icon: LineChart,
    github: "#",
    demo: "#",
  },
  {
    title: "Study Planner",
    tagline: "Track sessions with smart spaced repetition.",
    icon: BookOpen,
    github: "#",
    demo: "#",
  },
  {
    title: "ML Mini‑Lab",
    tagline: "Hands‑on notebooks for ML basics.",
    icon: Brain,
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    tagline: "Personal showcase of skills & achievements.",
    icon: Globe,
    github: "#",
    demo: "#",
  },
  {
    title: "AI Chatbot (Upcoming)",
    tagline: "Student‑friendly AI Q&A bot (in progress).",
    icon: Bot,
    github: "#",
    upcoming: true,
  },
]

export function ProjectsGrid() {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => {
        const Icon = p.icon
        return (
          <li
            key={p.title}
            className="rounded-xl border border-white/20 bg-white/10 p-4 transition hover:-translate-y-0.5 hover:bg-white/15"
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-flex size-9 items-center justify-center rounded-lg bg-white/15">
                <Icon className="size-5 text-white" aria-hidden="true" />
              </span>
              <h4 className="text-base font-semibold text-white">{p.title}</h4>
            </div>
            <p className="text-sm text-white/85">{p.tagline}</p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {p.github && (
                <Button asChild size="sm" className="bg-white text-slate-900 hover:bg-white/90">
                  <a href={p.github} target="_blank" rel="noreferrer">
                    <Github className="mr-1 size-4" />
                    GitHub
                  </a>
                </Button>
              )}
              {p.demo && (
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-white/60 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  <a href={p.demo} target="_blank" rel="noreferrer">
                    <ExternalLink className="mr-1 size-4" />
                    Demo
                  </a>
                </Button>
              )}
              {p.upcoming && !p.demo && (
                <span className="rounded-full border border-white/30 bg-white/10 px-2 py-1 text-xs text-white/90">
                  Coming soon
                </span>
              )}
            </div>
          </li>
        )
      })}
    </ul>
  )
}

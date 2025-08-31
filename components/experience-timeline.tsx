import { Briefcase, Users } from "lucide-react"

const items = [
  {
    title: "Student Developer",
    period: "2024 – Present",
    icon: Briefcase,
    impact: "Practiced DSA, built full‑stack mini‑projects.",
  },
  {
    title: "Open Source Explorer",
    period: "2025 – Present",
    icon: Users,
    impact: "Contributing to beginner‑friendly repos.",
  },
  {
    title: "Hackathons",
    period: "Team Collaborations",
    icon: Users,
    impact: "Built mini apps collaboratively under time pressure.",
  },
]

export function ExperienceTimeline() {
  return (
    <ol className="relative ml-3 space-y-6 border-l border-white/30">
      {items.map((item, idx) => {
        const Icon = item.icon
        return (
          <li key={idx} className="ml-6">
            <span className="absolute -left-3 flex size-6 items-center justify-center rounded-full border border-white/30 bg-white/10">
              <Icon className="size-3.5 text-white" aria-hidden="true" />
            </span>
            <div className="rounded-xl border border-white/20 bg-white/10 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-white">{item.title}</h4>
                <p className="text-sm text-white/80">{item.period}</p>
              </div>
              <p className="mt-1 text-sm text-white/90">{item.impact}</p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}

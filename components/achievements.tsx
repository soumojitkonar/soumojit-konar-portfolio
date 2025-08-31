import { Trophy, Medal, GraduationCap, Users } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "Hackathon Participant",
    desc: "Built real‑time mini apps under pressure.",
  },
  {
    icon: GraduationCap,
    title: "Certifications",
    desc: "Python, DSA, ML (Coursera/Udemy/NPTEL).",
  },
  {
    icon: Medal,
    title: "Strong CS Foundation",
    desc: "Mathematics & algorithms focus.",
  },
  {
    icon: Users,
    title: "Coding Club",
    desc: "Peer‑to‑peer sessions & activities.",
  },
]

export function Achievements() {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {achievements.map((a) => {
        const Icon = a.icon
        return (
          <li key={a.title} className="rounded-xl border border-white/20 bg-white/10 p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-flex size-8 items-center justify-center rounded-lg bg-white/15">
                <Icon className="size-5 text-white" aria-hidden="true" />
              </span>
              <h4 className="text-white">{a.title}</h4>
            </div>
            <p className="text-sm text-white/90">{a.desc}</p>
          </li>
        )
      })}
    </ul>
  )
}

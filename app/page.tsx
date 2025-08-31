import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ProjectsGrid } from "@/components/projects-grid"
import { SkillsCharts } from "@/components/skills-charts"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { Achievements } from "@/components/achievements"
import { Testimonials } from "@/components/testimonials"
import { ContactCTA } from "@/components/contact-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <header className="w-full">
        <div className="mx-auto max-w-3xl px-6 py-10">
          <nav className="flex items-center justify-between">
            <h1 className="text-pretty text-2xl font-semibold tracking-tight">Soumojit Konar</h1>
            <div className="flex items-center gap-3">
              <Button className="bg-white text-slate-900 hover:bg-white/90">View Projects</Button>
              <Button
                variant="outline"
                className="border-white/60 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                Contact
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <section className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 pb-16 pt-4 text-center">
        <div className="relative">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-4 rounded-full bg-white/10 blur-2xl"
          />
          <Image
            src="/images/new-pspp.jpg"
            width={160}
            height={160}
            alt="Portrait photograph"
            className="relative z-10 rounded-full border-4 border-white/70 shadow-xl"
            priority
          />
        </div>

        <div className="max-w-2xl space-y-3">
          <h2 className="text-balance text-4xl font-semibold leading-tight">
            Building AI‑powered projects with code and curiosity
          </h2>
          <p className="text-pretty text-white/90">
            2nd‑year CSE (AI/ML) student crafting interactive, colorful experiences. This portfolio uses a modern
            blue→purple gradient for a clean tech vibe and strong readability.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button className="bg-white text-slate-900 hover:bg-white/90">Download Resume</Button>
          <Button
            variant="outline"
            className="border-white/60 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            GitHub
          </Button>
          <Button
            variant="outline"
            className="border-white/60 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            LinkedIn
          </Button>
        </div>

        <ul className="mt-6 grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
          <li className="rounded-xl border border-white/20 bg-white/10 p-4 text-left">
            <p className="text-sm uppercase text-white/80">Focus</p>
            <p className="mt-1 font-medium">AI/ML • Web Dev • DSA</p>
          </li>
          <li className="rounded-xl border border-white/20 bg-white/10 p-4 text-left">
            <p className="text-sm uppercase text-white/80">Tech</p>
            <p className="mt-1 font-medium">Python • C/C++ • JS</p>
          </li>
          <li className="rounded-xl border border-white/20 bg-white/10 p-4 text-left">
            <p className="text-sm uppercase text-white/80">Currently</p>
            <p className="mt-1 font-medium">Open‑source & mini‑projects</p>
          </li>
        </ul>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-6">
        <h3 className="mb-4 text-left text-2xl font-semibold text-white">Projects</h3>
        <ProjectsGrid />
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-6">
        <h3 className="mb-4 text-left text-2xl font-semibold text-white">Skills & Learning</h3>
        <SkillsCharts />
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-6">
        <h3 className="mb-4 text-left text-2xl font-semibold text-white">Experience</h3>
        <ExperienceTimeline />
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h3 className="mb-4 text-left text-2xl font-semibold text-white">Achievements</h3>
        <Achievements />
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-6">
        <h3 className="mb-4 text-left text-2xl font-semibold text-white">What People Say</h3>
        <p className="mb-4 text-white/90">
          Here&apos;s what mentors, teammates, and peers have to say about working with me.
        </p>
        <Testimonials />
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <ContactCTA />
      </section>
    </main>
  )
}

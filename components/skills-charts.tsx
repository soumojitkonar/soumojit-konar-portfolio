"use client"

import type React from "react"

import {
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts"

// Palette (limit to 5 colors total):
// 1) Blue-600 #2563eb (primary)
// 2) Purple-600 #7c3aed (accent)
// 3) Blue-400 #60a5fa (chart variation)
// 4) White #ffffff (neutral)
// 5) Slate-900 #0f172a (neutral)
const BLUE = "#2563eb"
const PURPLE = "#7c3aed"
const BLUE_LIGHT = "#60a5fa"

const skillsPie = [
  { name: "Python", value: 40, color: BLUE },
  { name: "C/C++", value: 25, color: BLUE_LIGHT },
  { name: "JavaScript", value: 20, color: PURPLE },
  { name: "Java", value: 15, color: "#ffffff22" }, // subtle neutral tint under gradient
]

const projectsBar = [
  { name: "Web Dev", count: 3 },
  { name: "AI/ML Mini", count: 2 },
  { name: "Academic", count: 2 },
  { name: "Hackathon", count: 1 },
]

const learningRadar = [
  { skill: "DSA", score: 80 },
  { skill: "AI/ML", score: 60 },
  { skill: "Web Dev", score: 70 },
  { skill: "Communication", score: 75 },
]

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/20 bg-white/10 p-4">
      <h4 className="mb-3 text-white">{title}</h4>
      <div className="h-56 w-full">{children}</div>
    </div>
  )
}

export function SkillsCharts() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      <Card title="Skills Distribution">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip contentStyle={{ background: "rgba(255,255,255,0.9)", color: "#0f172a", border: "none" }} />
            <Pie
              data={skillsPie}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={70}
              paddingAngle={3}
            >
              {skillsPie.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Card>

      <Card title="Project Types">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={projectsBar}>
            <XAxis
              dataKey="name"
              tick={{ fill: "#fff" }}
              tickLine={false}
              axisLine={{ stroke: "rgba(255,255,255,0.3)" }}
            />
            <YAxis
              tick={{ fill: "#fff" }}
              tickLine={false}
              axisLine={{ stroke: "rgba(255,255,255,0.3)" }}
              allowDecimals={false}
            />
            <Tooltip contentStyle={{ background: "rgba(255,255,255,0.9)", color: "#0f172a", border: "none" }} />
            <Bar dataKey="count" radius={[6, 6, 0, 0]} fill={BLUE}>
              {projectsBar.map((_, i) => (
                <Cell key={i} fill={i % 2 === 0 ? BLUE : PURPLE} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card title="Learning Progress">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={learningRadar}>
            <PolarGrid stroke="rgba(255,255,255,0.3)" />
            <PolarAngleAxis dataKey="skill" tick={{ fill: "#fff" }} />
            <Tooltip contentStyle={{ background: "rgba(255,255,255,0.9)", color: "#0f172a", border: "none" }} />
            <Radar dataKey="score" stroke={PURPLE} fill={PURPLE} fillOpacity={0.35} />
          </RadarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}

type Testimonial = {
  quote: string
  name: string
  title: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Soumojit shows exceptional problem-solving skills and a genuine passion for AI/ML. His projects demonstrate both technical competence and creative thinking.",
    name: "Dr. Rajesh Kumar",
    title: "Professor, MCKV Institute",
  },
  {
    quote:
      "Working with Soumojit was amazing! He brings fresh ideas and has great communication skills. His coding abilities really helped our team succeed.",
    name: "Priya Sharma",
    title: "Hackathon Teammate",
  },
  {
    quote:
      "Soumojit is one of the most dedicated students I've mentored. His willingness to learn and help others makes him stand out in our coding community.",
    name: "Coding Club Mentor",
    title: "Senior Developer",
  },
]

export function Testimonials() {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {testimonials.map((t, i) => (
        <li
          key={i}
          className="rounded-xl border border-white/20 bg-white/10 p-5 text-left"
          aria-label={`Testimonial by ${t.name}`}
        >
          <p className="text-pretty text-white/95">
            {"“"}
            {t.quote}
            {"”"}
          </p>
          <div className="mt-4">
            <p className="font-semibold text-white">{t.name}</p>
            <p className="text-sm text-white/80">{t.title}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

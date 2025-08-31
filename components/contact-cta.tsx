"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, Github } from "lucide-react"

export function ContactCTA() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = `Portfolio Inquiry from ${name || "Someone"}`
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n— Sent from portfolio`
    window.location.href = `mailto:soumojitkonar8@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
        <h4 className="text-balance text-2xl font-semibold text-white">Let&apos;s Build Something Amazing</h4>
        <p className="mt-2 text-pretty text-white/90">
          Got an exciting project idea? Want to collaborate on AI/ML research? Or just want to chat about the latest in
          tech? I&apos;m always up for meaningful conversations and new challenges!
        </p>
      </div>

      {/* Why Work With Me */}
      <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
        <h5 className="text-xl font-semibold text-white">Why Work With Me?</h5>
        <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          <li className="rounded-xl border border-white/20 bg-white/5 p-4">
            <p className="text-sm uppercase text-white/80">Fresh Perspective</p>
            <p className="mt-1 text-white/95">I bring curiosity and innovative thinking to every project.</p>
          </li>
          <li className="rounded-xl border border-white/20 bg-white/5 p-4">
            <p className="text-sm uppercase text-white/80">Collaborative Spirit</p>
            <p className="mt-1 text-white/95">I love learning from others and sharing knowledge.</p>
          </li>
          <li className="rounded-xl border border-white/20 bg-white/5 p-4">
            <p className="text-sm uppercase text-white/80">Growing Expertise</p>
            <p className="mt-1 text-white/95">Constantly expanding skills in AI/ML and web development.</p>
          </li>
        </ul>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <a
          href="mailto:soumojitkonar8@gmail.com"
          className="rounded-xl border border-white/20 bg-white/10 p-4 no-underline transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40"
          aria-label="Email Soumojit"
        >
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-white" aria-hidden="true" />
            <div>
              <p className="text-sm text-white/80">Email</p>
              <p className="font-medium text-white">soumojitkonar8@gmail.com</p>
              <p className="text-xs text-white/75">Best for project discussions</p>
            </div>
          </div>
        </a>

        <a
          href="tel:+917980100930"
          className="rounded-xl border border-white/20 bg-white/10 p-4 no-underline transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40"
          aria-label="Call Soumojit"
        >
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-white" aria-hidden="true" />
            <div>
              <p className="text-sm text-white/80">Phone</p>
              <p className="font-medium text-white">+91 7980100930</p>
              <p className="text-xs text-white/75">Quick calls and urgent matters</p>
            </div>
          </div>
        </a>

        <a
          href="https://github.com/soumojitkonar"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-white/20 bg-white/10 p-4 no-underline transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40"
          aria-label="View GitHub profile"
        >
          <div className="flex items-center gap-3">
            <Github className="h-5 w-5 text-white" aria-hidden="true" />
            <div>
              <p className="text-sm text-white/80">GitHub</p>
              <p className="font-medium text-white">github.com/soumojitkonar</p>
              <p className="text-xs text-white/75">Check out my latest code</p>
            </div>
          </div>
        </a>
      </div>

      {/* Simple contact form -> mailto */}
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-white/20 bg-white/10 p-6"
        aria-label="Start a Conversation"
      >
        <h5 className="text-xl font-semibold text-white">Start a Conversation</h5>
        <p className="mt-1 text-white/90">
          Tell me about your ideas, collaboration opportunities, research interests, or even just a friendly hello!
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">
              What&apos;s your name?
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="border-white/30 bg-white/10 text-white placeholder:text-white/70"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Your email address
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="border-white/30 bg-white/10 text-white placeholder:text-white/70"
              required
            />
          </div>
          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="message" className="text-white">
              What&apos;s on your mind?
            </Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Project ideas, collaboration opportunities, or a quick hello..."
              className="min-h-28 border-white/30 bg-white/10 text-white placeholder:text-white/70"
              required
            />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Button type="submit" className="bg-white text-slate-900 hover:bg-white/90">
            Send Email
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setName("")
              setEmail("")
              setMessage("")
            }}
            className="border-white/60 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            Clear
          </Button>
        </div>
      </form>
    </div>
  )
}

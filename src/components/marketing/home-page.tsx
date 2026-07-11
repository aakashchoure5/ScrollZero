"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Mouse } from "lucide-react";
import {
  blogPosts,
  faqs,
  features,
  pricing,
  problemStats,
  roadmap,
  solutions,
  testimonials,
  trustMetrics,
  trustPills,
} from "@/content/site";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const rise = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3B82F6]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">{title}</h2>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">{text}</p>
    </div>
  );
}

export function HomePage() {
  return (
    <div className="space-y-20 pb-12">
      <section className="relative overflow-hidden px-4 pt-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-10 h-56 w-56 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-500/20" />
          <div className="absolute right-1/4 top-24 h-64 w-64 rounded-full bg-blue-300/30 blur-3xl dark:bg-blue-500/20" />
        </div>
        <motion.div initial="hidden" animate="show" variants={rise} className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">Built for Android • Privacy first • US launch</p>
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 sm:text-7xl dark:text-zinc-100">Reclaim Your Attention.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            ScrollZero helps you reduce doomscrolling and short-form addiction with intelligent insights, habit systems, and focus tools.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg"><Link href="/contact">Get Early Access</Link></Button>
            <Button asChild variant="secondary" size="lg"><Link href="/contact">Join Waitlist</Link></Button>
            <Button asChild variant="ghost" size="lg"><Link href="/features">Watch Demo <ArrowRight className="size-4" /></Link></Button>
          </div>
          <div className="mt-12 flex justify-center"><Mouse className="size-6 animate-bounce text-zinc-500" /></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-12 max-w-sm rounded-[2.5rem] border border-zinc-200/60 bg-white/90 p-3 shadow-2xl shadow-cyan-500/20 dark:border-zinc-800 dark:bg-zinc-900/90"
        >
          <div className="rounded-[2rem] bg-gradient-to-b from-zinc-900 to-zinc-800 p-4 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Today</p>
            <p className="mt-2 text-3xl font-bold">-1h 42m</p>
            <p className="text-sm text-zinc-300">less doomscrolling vs last week</p>
            <div className="mt-4 space-y-2">
              {["Shorts", "Reels", "Feed"].map((item, i) => (
                <div key={item} className="rounded-xl bg-white/10 p-2 text-xs">
                  {item}
                  <div className="mt-1 h-1.5 rounded-full bg-white/20">
                    <div className="h-1.5 rounded-full bg-gradient-to-r from-[#2DD4BF] to-[#3B82F6]" style={{ width: `${75 - i * 20}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto grid w-[min(96%,72rem)] gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {trustPills.map((pill) => (
          <Card key={pill} className="text-center text-sm font-medium">{pill}</Card>
        ))}
      </section>

      <section className="mx-auto w-[min(96%,72rem)] space-y-8">
        <SectionTitle eyebrow="The Problem" title="Doomscrolling is stealing high-quality life hours." text="Attention erosion affects productivity, mood, and long-term wellbeing." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problemStats.map((item) => (
            <Card key={item.label}>
              <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">{item.value}</p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.label}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(96%,72rem)] space-y-8">
        <SectionTitle eyebrow="Solution" title="A focus operating system for your phone." text="ScrollZero combines behavior intelligence and action loops that actually stick." />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {solutions.map((item) => (
            <Card key={item} className="text-sm font-medium">{item}</Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(96%,72rem)] space-y-8">
        <SectionTitle eyebrow="Features" title="Every interaction is designed to protect attention." text="Motion-rich cards and contextual guidance keep you in control." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <motion.div key={feature.title} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: idx * 0.03 }} variants={rise}>
              <Card>
                <feature.icon className="size-5 text-[#2DD4BF]" />
                <h3 className="mt-3 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(96%,72rem)] space-y-8">
        <SectionTitle eyebrow="How It Works" title="Install. Track. Improve." text="Three steps from chaos to clarity." />
        <div className="grid gap-4 md:grid-cols-3">
          {["Install", "Track", "Improve"].map((step, i) => (
            <Card key={step} className="text-center">
              <p className="text-sm text-zinc-500">Step {i + 1}</p>
              <h3 className="mt-2 text-xl font-semibold">{step}</h3>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(96%,72rem)] space-y-8">
        <SectionTitle eyebrow="Roadmap" title="Building the future of digital wellbeing." text="A clear path from MVP to platform." />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {roadmap.map((item, i) => (
            <Card key={item} className="flex items-center gap-2 text-sm"><CheckCircle2 className="size-4 text-[#3B82F6]" /> {i + 1}. {item}</Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(96%,72rem)] space-y-8">
        <SectionTitle eyebrow="Pricing" title="Simple plans for every focus journey." text="Start free and scale with your goals." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {pricing.map((plan, idx) => (
            <Card key={plan.name} className={idx === 1 ? "ring-2 ring-[#2DD4BF]/60" : ""}>
              <p className="text-sm text-zinc-500">{plan.name}</p>
              <p className="mt-2 text-3xl font-bold">{plan.price}</p>
              <p className="text-sm text-zinc-500">{plan.cadence}</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                {plan.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(96%,72rem)] space-y-8">
        <SectionTitle eyebrow="Testimonials" title="Loved by ambitious people who value attention." text="Real stories from early users." />
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name}>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">“{item.quote}”</p>
              <p className="mt-4 font-semibold">{item.name}</p>
              <p className="text-sm text-zinc-500">{item.role}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(96%,72rem)] space-y-8">
        <SectionTitle eyebrow="FAQ" title="Everything you need to know." text="Answers for privacy, compatibility, and outcomes." />
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((item) => (
            <AccordionItem value={item.q} key={item.q}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mx-auto grid w-[min(96%,72rem)] gap-4 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.slug}>
            <p className="text-xs uppercase tracking-[0.18em] text-[#3B82F6]">Article</p>
            <h3 className="mt-2 text-lg font-semibold">{post.title}</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>
            <Link href="/blog" className="mt-4 inline-flex text-sm font-medium text-[#3B82F6]">Read more →</Link>
          </Card>
        ))}
      </section>

      <section className="mx-auto w-[min(96%,72rem)] rounded-3xl bg-gradient-to-r from-[#2DD4BF] to-[#3B82F6] p-10 text-center text-white">
        <h2 className="text-3xl font-bold">Join the ScrollZero Newsletter</h2>
        <p className="mt-2 text-cyan-50">Get practical attention strategies, product updates, and launch access.</p>
        <div className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
          <input className="h-11 flex-1 rounded-full border border-white/40 bg-white/15 px-4 placeholder:text-cyan-50 focus:outline-none focus:ring-2 focus:ring-white/70" placeholder="Enter your email" />
          <Button variant="secondary" size="lg" className="bg-white text-zinc-900 hover:bg-zinc-100">Join Newsletter</Button>
        </div>
      </section>

      <section className="mx-auto w-[min(96%,72rem)] grid gap-4 sm:grid-cols-3">
        {trustMetrics.map((item) => (
          <Card key={item.label} className="flex items-center gap-3 text-sm">
            <item.icon className="size-4 text-[#2DD4BF]" />
            {item.label}
          </Card>
        ))}
      </section>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { PortfolioTabs } from "@/components/PortfolioTabs";
import { Section } from "@/components/Section";
import { contactLinks, experienceHighlights, projects } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(15,23,42,0.04),_transparent_35%)] text-slate-900 dark:text-slate-100 dark:bg-slate-950 dark:bg-[radial-gradient(circle_at_top_left,_rgba(148,163,184,0.12),_transparent_35%)]">
      <NavBar />
      <main id="home" className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-16 lg:px-8 lg:py-24">
        <section className="grid items-center gap-10 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm shadow-slate-200/70 backdrop-blur dark:border-slate-700 dark:bg-slate-950/80 md:grid-cols-[1.2fr_0.8fr] md:p-12">
          <div className="space-y-6">
            <div className="inline-flex rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm font-medium text-slate-900 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100">
              Electrical Engineering / Robotics Student
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-slate-100 sm:text-5xl">
                Hi, I’m Mukesh Ramanathan.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-200">
                I’m an engineering student focused on robotics, embedded systems,
                and building practical tools that turn ideas into reliable hardware
                and software.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900 dark:border-slate-600 dark:text-slate-200 dark:hover:border-slate-400 dark:hover:text-white"
              >
                Explore Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900 dark:border-slate-600 dark:text-slate-200 dark:hover:border-slate-400 dark:hover:text-white"
              >
                Let’s Connect
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-950 p-6 text-slate-100 shadow-lg">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
              <Image
                src="./images/profile.jpg"
                alt="Profile photo"
                width={600}
                height={420}
                className="h-48 w-full object-contain"
              />
            </div>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-slate-400">About Me</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              I enjoy translating technical curiosity into real-world systems,
              from control logic and sensors to polished interfaces that make complex
              engineering work approachable.
            </p>
          </div>
        </section>

        <Section id="portfolio-tabs" eyebrow="Portfolio" title="Explore my work">
          <div className="mt-8">
            <PortfolioTabs />
          </div>
        </Section>
      </main>
    </div>
  );
}

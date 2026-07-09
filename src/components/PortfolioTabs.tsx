"use client";

import { useState } from "react";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Section } from "@/components/Section";
import { contactLinks, experienceHighlights, projects } from "@/data/portfolio";

const tabs = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-200/70 backdrop-blur dark:border-slate-700 dark:bg-slate-950/80">
      <div className="mb-6 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeTab === tab.id
                ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                : "border border-slate-300 text-slate-700 hover:border-slate-900 hover:text-slate-900 dark:border-slate-600 dark:text-slate-200 dark:hover:border-slate-400 dark:hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="space-y-10">
        {activeTab === "about" ? (
          <Section id="about" eyebrow="About" title="Engineering mindset, thoughtful execution">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">What I do</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-200">
                  I combine electrical engineering fundamentals with robotics and software experimentation to create systems that are both functional and elegant.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Current focus</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-200">
                  Building reliable prototypes, improving control workflows, and learning how to communicate technical progress clearly in collaborative teams.
                </p>
              </div>
            </div>
          </Section>
        ) : null}

        {activeTab === "projects" ? (
          <Section id="projects" eyebrow="Projects" title="Selected work">
            <ProjectGallery projects={projects} />
          </Section>
        ) : null}

        {activeTab === "experience" ? (
          <Section id="experience" eyebrow="Robotics / Engineering Experience" title="Leadership and technical depth">
            <div className="grid gap-6 md:grid-cols-3">
              {experienceHighlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-200">{item.description}</p>
                </div>
              ))}
            </div>
          </Section>
        ) : null}

        {activeTab === "contact" ? (
          <Section id="contact" eyebrow="Contact" title="Let’s build something impactful">
            <div className="rounded-2xl border border-slate-200 bg-slate-900 p-8 text-slate-100 shadow-sm">
              <p className="max-w-2xl text-sm leading-7 text-slate-300">
                I’m interested in robotics, embedded systems, and collaborative engineering work. Feel free to reach out for projects, internships, or conversations about building better tools.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-slate-400 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </Section>
        ) : null}
      </div>
    </div>
  );
}

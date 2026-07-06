"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/data/portfolio";

type ProjectGalleryProps = {
  projects: Project[];
};

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string | null>(null);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            {project.title !== "Discord Bot Development" && project.image ? (
              <button
                type="button"
                onClick={() => {
                  setActiveImage(project.image ?? null);
                  setActiveTitle(project.title);
                }}
                className="mb-4 overflow-hidden rounded-xl border border-slate-200 text-left"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={320}
                  className="h-36 w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </button>
            ) : null}
            <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
            {project.title === "Discord Bot Development" && project.image ? (
              <button
                type="button"
                onClick={() => {
                  setActiveImage(project.image ?? null);
                  setActiveTitle(project.title);
                }}
                className="mt-6 overflow-hidden rounded-xl border border-slate-200 text-left"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={320}
                  className="h-36 w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </button>
            ) : null}
            {project.link ? (
              <Link
                href={project.link}
                className="mt-6 inline-flex text-sm font-semibold text-slate-900 transition group-hover:translate-x-1"
              >
                View project →
              </Link>
            ) : null}
          </article>
        ))}
      </div>

      {activeImage ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
          <div className="relative max-h-full w-full max-w-5xl overflow-hidden rounded-3xl bg-slate-950 shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100/90 text-slate-900 transition hover:bg-white"
            >
              ×
            </button>
            <div className="p-4 text-center text-sm font-medium text-slate-100">
              {activeTitle}
            </div>
            <div className="border-t border-slate-700">
              <Image
                src={activeImage}
                alt={activeTitle ?? "Expanded image"}
                width={1200}
                height={800}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

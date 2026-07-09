"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function NavBar() {
  const [activeTab, setActiveTab] = useState<string>("#about");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveTab(window.location.hash || "#about");
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/80 backdrop-blur dark:bg-slate-950/80 dark:border-slate-700/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          Mukesh Ramanathan | Portfolio
        </a>
        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 sm:gap-3">
          {links.map((link) => {
            const isActive = activeTab === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`inline-flex items-center rounded-full border px-4 py-2 transition focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-600 ${
                  isActive
                    ? "border-slate-900 bg-slate-100 text-slate-950 dark:border-slate-100 dark:bg-slate-800 dark:text-slate-100"
                    : "border-transparent text-slate-700 hover:border-slate-300 hover:text-slate-900 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

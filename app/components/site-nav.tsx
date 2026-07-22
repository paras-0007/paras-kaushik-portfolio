"use client";

import Link from "next/link";
import { useState } from "react";

export function SiteNav({ active }: { active?: "hire" | "consulting" }) {
  const [open, setOpen] = useState(false);

  function toggleTheme() {
    const current = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("portfolio-theme", next);
  }

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <div className="nav-inner">
        <Link href="/" className="nav-logo"><span>~/</span>paras</Link>
        <div className={`nav-menu ${open ? "open" : ""}`}>
          <Link href="/#work" onClick={() => setOpen(false)}>Work</Link>
          <Link href="/#experience" onClick={() => setOpen(false)}>Experience</Link>
          <Link href="/hire" className={active === "hire" ? "active" : ""} onClick={() => setOpen(false)}>Hire Me</Link>
          <Link href="/consulting" className={active === "consulting" ? "active" : ""} onClick={() => setOpen(false)}>Consulting</Link>
        </div>
        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle color theme"><span aria-hidden="true">◐</span></button>
          <a className="nav-cta" href="mailto:paraskaushik862@gmail.com">Get in touch</a>
          <button className={`nav-toggle ${open ? "open" : ""}`} onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation"><span /><span /><span /></button>
        </div>
      </div>
    </nav>
  );
}

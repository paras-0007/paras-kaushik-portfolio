"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ContactForm } from "./components/contact-form";
import { HeroScene } from "./components/hero-scene";
import { MagneticButton } from "./components/magnetic-button";
import { SiteFooter } from "./components/site-footer";
import { SiteNav } from "./components/site-nav";
import { TiltCard } from "./components/tilt-card";
import {
  achievements,
  capabilityMatches,
  certifications,
  education,
  experience,
  flashrBadge,
  heroStats,
  profile,
  projects,
  skillGroups,
} from "./lib/resume-data";

type MatchKey = keyof typeof capabilityMatches;

export default function Home() {
  const [match, setMatch] = useState<MatchKey>("documents");

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")), { threshold: 0.08 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const activeMatch = capabilityMatches[match];

  return (
    <main>
      <SiteNav />

      <header className="hero-home">
        <HeroScene />
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <div className="status-pill"><span /> Open to roles, consulting &amp; collaborations</div>
            <p className="kicker">{profile.role} · Founder · Builder</p>
            <h1>I build AI systems that <em>actually ship</em> to production.</h1>
            <p className="hero-sub">{profile.summary}</p>
            <div className="hero-actions">
              <MagneticButton><Link className="btn primary" href="/hire">Hire me</Link></MagneticButton>
              <MagneticButton><Link className="btn secondary" href="/consulting">Consult with me</Link></MagneticButton>
              <a className="btn ghost" href="#work">See the work ↓</a>
              <button type="button" className="btn ghost" onClick={() => window.dispatchEvent(new Event("toggle-ai-terminal"))}>Ask my AI resume <kbd>⌘K</kbd></button>
            </div>
            <a className="flashr-badge" href={flashrBadge.href} target="_blank" rel="noreferrer">
              <b>{flashrBadge.label}</b><strong>{flashrBadge.title}</strong><span>{flashrBadge.copy}</span>
            </a>
          </div>
          <div className="hero-person reveal">
            <div className="person-disc" />
            <div className="portrait-glass glass" />
            <Image src="/paras-kaushik-sticker.png" alt="Paras Kaushik" width={1080} height={1456} priority sizes="(max-width: 760px) 360px, 430px" />
            <div className="person-card glass"><span>CURRENTLY</span><strong>Building applied AI systems + Flashr</strong></div>
          </div>
        </div>
        <div className="container stats-strip reveal">
          {heroStats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
        </div>
      </header>

      <section className="section paths-section"><div className="container">
        <div className="section-head reveal"><span className="section-index">01 / WORK WITH ME</span><h2>Two clear ways to start.</h2></div>
        <div className="paths-grid">
          <TiltCard className="reveal"><Link className="path-card" href="/hire"><span className="path-icon">01</span><h3>Hire Me</h3><p>For teams looking for an applied AI engineer who owns data, model quality, deployment, and product outcomes.</p><b>See what I bring →</b></Link></TiltCard>
          <TiltCard className="reveal"><Link className="path-card" href="/consulting"><span className="path-icon">02</span><h3>Consulting</h3><p>For founders and teams who need to validate, architect, or ship an AI feature without wasting cycles.</p><b>View services →</b></Link></TiltCard>
        </div>
      </div></section>

      <section className="section match-section"><div className="container">
        <div className="section-head reveal"><span className="section-index">02 / PROBLEM-TO-PROOF</span><h2>Choose the problem. See my closest proof.</h2><p>A fast way to understand where I create leverage.</p></div>
        <div className="match-console glass reveal">
          <div className="match-tabs" role="tablist" aria-label="Choose an AI problem">{(Object.keys(capabilityMatches) as MatchKey[]).map((key) => <button key={key} role="tab" aria-selected={match === key} className={match === key ? "active" : ""} onClick={() => setMatch(key)}>{capabilityMatches[key].label}</button>)}</div>
          <div className="match-output" key={match}><div><span>BEST MATCH / {activeMatch.label}</span><h3>{activeMatch.title}</h3><p>{activeMatch.copy}</p></div><aside><span>SHIPPED PROOF</span><strong>{activeMatch.proof}</strong><Link href={match === "product" ? "/consulting" : "/hire"}>Discuss this problem ↗</Link></aside></div>
        </div>
      </div></section>

      <section className="section" id="work"><div className="container">
        <div className="section-head reveal"><span className="section-index">03 / SELECTED WORK</span><h2>Things I&apos;ve built.</h2><p>Production systems with real users and measurable outcomes - not isolated demos.</p></div>
        <div className="bento-grid">{projects.map((project) => (
          <TiltCard key={project.title} className={`reveal ${project.featured ? "wide" : ""}`}>
            <article className={`work-card ${project.featured ? "featured" : ""}`}>
              <div className="work-top"><h3>{project.title}</h3><span className="badge">{project.badge}</span></div>
              <p>{project.copy}</p>
              <strong className="work-metric">{project.metric}</strong>
              <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              {project.links && <div className="work-links">{project.links.map(([label, href]) => <a key={href} href={href} target="_blank" rel="noreferrer">{label} ↗</a>)}</div>}
            </article>
          </TiltCard>
        ))}</div>
      </div></section>

      <section className="section experience-section" id="experience"><div className="container">
        <div className="section-head reveal"><span className="section-index">04 / EXPERIENCE</span><h2>Where I&apos;ve built and learned.</h2></div>
        <div className="timeline">{experience.map((item) => <article className="timeline-item reveal" key={`${item.org}-${item.meta}`}><div className="timeline-dot" /><div className="timeline-head"><h3>{item.role}</h3><strong>{item.org}</strong><span>{item.meta}</span></div><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></article>)}</div>
      </div></section>

      <section className="section recognition-section"><div className="container">
        <div className="section-head reveal"><span className="section-index">05 / RECOGNITION</span><h2>Recognized in the room, not just on paper.</h2></div>
        <div className="recognition-grid">{achievements.map((item) => (
          <TiltCard key={item.title} className="reveal"><div className="recognition-card glass"><h3>{item.title}</h3><p>{item.copy}</p></div></TiltCard>
        ))}</div>
      </div></section>

      <section className="section toolkit-section"><div className="container">
        <div className="section-head reveal"><span className="section-index">06 / TOOLKIT</span><h2>Skills across the whole system.</h2></div>
        <div className="skills-grid">{skillGroups.map((group) => (
          <div className="skill-group reveal" key={group.title}><h3>{group.title}</h3><div className="tags">{group.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
        ))}</div>
        <div className="cert-row reveal">{certifications.map((cert) => <span className="cert-chip" key={cert}>{cert}</span>)}</div>
      </div></section>

      <section className="section about-section" id="about"><div className="container about-grid">
        <div className="about-photo reveal"><div className="photo-disc" /><Image src="/paras-kaushik-sticker.png" alt="Paras Kaushik portrait" width={1080} height={1456} sizes="(max-width: 700px) 340px, 390px" /></div>
        <div className="about-text reveal"><span className="section-index">07 / ABOUT</span><h2>Research depth.<br />Founder urgency.</h2><p>I studied Computer Science Engineering at {education.school}, then moved quickly from analytics into computer vision, language models, and production AI. My work now spans education, hiring, productivity, and document intelligence.</p><p>I care about systems that survive contact with real users. A fine-tuned model matters only when it is measurable, deployable, monitored, and economical enough to keep running.</p><div className="about-facts"><div><span>Education</span>{education.degree.replace("in Computer Science Engineering", "CSE")}, {education.dates}</div><div><span>CGPA</span>{education.cgpa}</div><div><span>Location</span>{profile.location}</div><div><span>Focus</span>Applied AI + products</div></div></div>
      </div></section>

      <section className="cta-band" id="contact"><div className="container"><div className="cta-copy reveal"><span className="section-index">08 / GET IN TOUCH</span><h2>Let&apos;s build something that works.</h2><p>Tell me about the role, product, or stubborn AI problem on your desk.</p></div><ContactForm /></div></section>
      <SiteFooter />
    </main>
  );
}

import type { Metadata } from "next";
import { ContactForm } from "../components/contact-form";
import { SiteFooter } from "../components/site-footer";
import { SiteNav } from "../components/site-nav";

const strengths = [
  ["01", "End-to-end ownership", "I can move from problem framing and dataset design through model adaptation, APIs, deployment, evaluation, and product feedback loops."],
  ["02", "Fine-tuning that moves metrics", "My model work is tied to task outcomes: 8% CER on noisy handwriting, 3L+ sheets evaluated, and 80% lower per-sheet inference cost."],
  ["03", "Production pragmatism", "I design around latency, reliability, GPU cost, failure modes, and human review - not just a benchmark score."],
  ["04", "Founder product sense", "Building Flashr means I understand prioritization, UX trade-offs, subscriptions, speed, and what it takes to earn repeated use."],
];

export const metadata: Metadata = {
  title: "Hire Paras Kaushik - Applied AI Engineer",
  description: "Hire Paras Kaushik for applied AI, multimodal model engineering, document intelligence, voice agents, and production AI product work.",
};

export default function HirePage() {
  return (
    <main>
      <SiteNav active="hire" />
      <header className="page-hero"><div className="container"><div className="status-pill"><span /> Open to full-time &amp; contract roles</div><p className="kicker">HIRE ME</p><h1>An AI engineer who owns the problem, <em>not just the model.</em></h1><p className="hero-sub">I work best with teams building ambitious AI products where model quality, deployment, economics, and user experience all matter.</p><div className="hero-actions"><a className="btn primary" href="#contact">Contact me about a role</a><a className="btn secondary" href="/Paras-Kaushik-Resume.pdf" target="_blank">View resume ↗</a><a className="btn ghost" href="https://www.linkedin.com/in/paraskaushik07" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div></header>

      <section className="section"><div className="container"><div className="section-head"><span className="section-index">01 / WHAT I BRING</span><h2>Why teams hire me.</h2></div><div className="offers-grid">{strengths.map(([n,title,copy]) => <article className="offer-card" key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

      <section className="section role-fit-section"><div className="container"><div className="section-head"><span className="section-index">02 / STRONGEST FIT</span><h2>Roles where I create leverage.</h2></div><div className="fit-grid"><article><h3>Applied AI Engineer</h3><p>Owning an AI capability from data and evaluation through service integration and production behavior.</p></article><article><h3>ML / Multimodal Engineer</h3><p>Fine-tuning and deploying vision-language, document AI, computer vision, retrieval, or voice systems.</p></article><article><h3>AI Product Engineer</h3><p>Working across model, backend, and user experience to turn an AI concept into a product people use.</p></article></div><div className="evidence-row"><div><strong>3L+</strong><span>Sheets evaluated</span></div><div><strong>80%</strong><span>Inference cost reduced</span></div><div><strong>70%</strong><span>HR workload reduced</span></div><div><strong>Web + Android</strong><span>Founder-led shipping</span></div></div></div></section>

      <section className="section"><div className="container"><div className="section-head"><span className="section-index">03 / PROCESS</span><h2>A low-friction hiring path.</h2></div><div className="steps"><article><span>01</span><h3>Share the role</h3><p>Send the problem, team context, and what success looks like.</p></article><article><span>02</span><h3>Technical conversation</h3><p>We discuss architecture, trade-offs, and a system I have shipped.</p></article><article><span>03</span><h3>Working session</h3><p>A practical exercise or product discussion grounded in your real work.</p></article><article><span>04</span><h3>Decide quickly</h3><p>Clear expectations, honest fit, and a direct path to starting.</p></article></div></div></section>

      <section className="cta-band" id="contact"><div className="container"><div className="cta-copy"><span className="section-index">04 / START HERE</span><h2>Have a role in mind?</h2><p>Send the role and the hardest AI problem the team is solving.</p></div><ContactForm kind="hire" /><p className="direct-link">Prefer direct email? <a href="mailto:paraskaushik862@gmail.com">paraskaushik862@gmail.com</a></p></div></section>
      <SiteFooter />
    </main>
  );
}

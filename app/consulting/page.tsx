import type { Metadata } from "next";
import { ContactForm } from "../components/contact-form";
import { SiteFooter } from "../components/site-footer";
import { SiteNav } from "../components/site-nav";

const services = [
  ["01", "AI feasibility & strategy", "Turn a fuzzy AI idea into a testable architecture, risk map, evaluation plan, and realistic build sequence."],
  ["02", "LLM, RAG & agent systems", "Design retrieval, tool use, multi-agent workflows, guardrails, and evaluation around the decision your product must make."],
  ["03", "Custom model fine-tuning", "Dataset design, SFT/RFT/GRPO, VLM adaptation, handwriting OCR, error analysis, serving, and cost optimization."],
  ["04", "AI product build", "Take a capability from prototype to production with backend APIs, mobile or web delivery, analytics, and operating feedback loops."],
];

export const metadata: Metadata = {
  title: "AI Consulting - Paras Kaushik",
  description: "AI feasibility, LLM and agent systems, model fine-tuning, document intelligence, and production AI product consulting.",
};

export default function ConsultingPage() {
  return (
    <main>
      <SiteNav active="consulting" />
      <header className="page-hero"><div className="container"><div className="status-pill"><span /> Taking on focused consulting engagements</div><p className="kicker">CONSULTING</p><h1>Ship your AI feature <em>without the guesswork.</em></h1><p className="hero-sub">I help teams turn uncertain AI opportunities into measurable systems - then build the difficult parts required to get them into users&apos; hands.</p><div className="hero-actions"><a className="btn primary" href="#contact">Start a conversation</a><a className="btn secondary" href="#services">See services ↓</a></div></div></header>

      <section className="section" id="services"><div className="container"><div className="section-head"><span className="section-index">01 / SERVICES</span><h2>What I help with.</h2><p>Every service below is grounded in systems I have already built and operated.</p></div><div className="offers-grid">{services.map(([n,title,copy]) => <article className="offer-card" key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

      <section className="section engagement-section"><div className="container"><div className="section-head"><span className="section-index">02 / ENGAGEMENTS</span><h2>Ways to work together.</h2></div><div className="models-grid"><article><span>QUICK START</span><h3>AI Diagnostic</h3><p>A focused review of the problem, data, current architecture, risks, and next experiments.</p><ul><li>Architecture and feasibility</li><li>Evaluation plan</li><li>Prioritized action memo</li></ul><a className="btn secondary" href="#contact">Book a diagnostic</a></article><article className="highlight"><span>MOST COMMON</span><h3>Project Build</h3><p>A defined AI capability delivered from evaluation baseline through a production-ready handoff.</p><ul><li>Model and system implementation</li><li>APIs and deployment</li><li>Documentation and knowledge transfer</li></ul><a className="btn primary" href="#contact">Scope a project</a></article><article><span>ONGOING</span><h3>Fractional AI Engineer</h3><p>Embedded technical ownership for teams that need senior AI execution without a full-time hire.</p><ul><li>Weekly engineering ownership</li><li>Model and product decisions</li><li>Team enablement</li></ul><a className="btn secondary" href="#contact">Discuss a retainer</a></article></div></div></section>

      <section className="section"><div className="container"><div className="section-head"><span className="section-index">03 / PROCESS</span><h2>How an engagement runs.</h2></div><div className="steps"><article><span>01 · Discover</span><h3>Define the real decision</h3><p>Users, workflow, constraints, data, and the business outcome.</p></article><article><span>02 · Scope</span><h3>Design the smallest proof</h3><p>Metrics, risks, architecture, milestones, and a clear stop/go point.</p></article><article><span>03 · Build</span><h3>Ship in measurable slices</h3><p>Frequent demos, evaluation against real examples, and visible trade-offs.</p></article><article><span>04 · Handover</span><h3>Leave a system, not a dependency</h3><p>Documentation, operating guidance, and a practical roadmap.</p></article></div></div></section>

      <section className="section faq-section"><div className="container"><div className="section-head"><span className="section-index">04 / FAQ</span><h2>Before we start.</h2></div><div className="faq"><details><summary>What stage should the product be at?</summary><p>Anywhere from a well-defined idea to a live system that needs better quality, reliability, or economics. A concrete user problem matters more than maturity.</p></details><details><summary>Do you work with existing engineering teams?</summary><p>Yes. I can own a focused capability, collaborate with product and engineering, or help a team establish evaluation and architecture before they build.</p></details><details><summary>What do you not take on?</summary><p>Generic websites, vague “add AI” projects without a user decision, and engagements where data access or success criteria cannot be established.</p></details></div></div></section>

      <section className="cta-band" id="contact"><div className="container"><div className="cta-copy"><span className="section-index">05 / START HERE</span><h2>Tell me what you&apos;re building.</h2><p>The problem, current state, constraints, and what a useful result would change.</p></div><ContactForm kind="consulting" /><p className="direct-link">Prefer direct email? <a href="mailto:paraskaushik862@gmail.com">paraskaushik862@gmail.com</a></p></div></section>
      <SiteFooter />
    </main>
  );
}

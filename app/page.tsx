"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";

type WorkFilter = "all" | "products" | "models" | "automation";

const work = [
  {
    title: "Flashr",
    eyebrow: "Founder / AI product",
    category: "products",
    summary:
      "An AI-native retention platform for India's competitive exams. Flashr turns PDFs, screenshots, and handwritten notes into flashcards and MCQs, schedules revision with SM-2 spaced repetition, and makes practice social through a live Duel Arena.",
    highlights: [
      "Shipped end-to-end as a hosted product and Android app",
      "Multimodal ingestion with OCR and Gemini",
      "Subscriptions, realtime study loops, and product analytics",
    ],
    stack: ["React Native", "Expo", "Supabase", "Gemini", "OCR", "SM-2"],
    metric: "LIVE",
    metricLabel: "Web + Google Play",
    links: [
      { label: "flashrapp.in", href: "https://flashrapp.in" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.den.flashr" },
      { label: "quietgradient.com", href: "https://quietgradient.com" },
    ],
  },
  {
    title: "GradeSmith",
    eyebrow: "Document AI / model engineering",
    category: "models",
    summary:
      "An institution-scale grading system built for handwritten answers, subjective rubrics, and the messy edge cases that break ordinary OCR pipelines.",
    highlights: [
      "Fine-tuned Qwen3.5 9B for handwritten answer extraction and mapping",
      "Fine-tuned YOLO models to detect cuts and invalidated responses",
      "Built multi-step evaluation, rubric scoring, and confidence controls",
    ],
    stack: ["Qwen3.5 9B", "YOLO", "VLM fine-tuning", "Agentic evaluation", "FastAPI", "GPU inference"],
    metric: "3L+",
    metricLabel: "Sheets evaluated for a major university",
    note: "Reduced per-sheet inference cost by 80% while taking the system from model experiments to institutional delivery.",
  },
  {
    title: "Hirefl.ai",
    eyebrow: "AI automation / HR technology",
    category: "automation",
    summary:
      "A hiring intelligence platform that replaces repetitive resume review and first-round coordination with a connected, evidence-led workflow for HR teams.",
    highlights: [
      "LLaMA-based resume parsing and candidate screening",
      "Real-time voice interviews with STT, TTS, and adaptive questions",
      "Automated scoring, summaries, and decision-ready candidate reports",
    ],
    stack: ["LLaMA", "Voice AI", "STT / TTS", "Evaluation", "FastAPI"],
    metric: "70%",
    metricLabel: "Less repetitive HR workload",
  },
  {
    title: "KAIROS AI",
    eyebrow: "Multi-tool AI workspace",
    category: "products",
    summary:
      "A modular AI workspace that brought voice control, document intelligence, and everyday automation into one place instead of forcing users across disconnected tools.",
    highlights: [
      "PRINCE voice model for controlling web and local-system actions",
      "DoChat for conversational search across PDFs and documents",
      "OCR, multilingual translation, QR workflows, and task agents",
    ],
    stack: ["Multi-agent systems", "RAG", "Voice control", "OCR", "Tool calling", "STT / TTS"],
    metric: "7+",
    metricLabel: "AI capabilities in one workspace",
    note: "Designed as an extensible agent architecture, not a bundle of disconnected demos.",
  },
];

const journey = [
  {
    period: "2026 - Present",
    role: "Product Founder",
    company: "Flashr",
    copy: "Building and shipping an AI-native learning product across web and Android - from product decisions and AI workflows to subscriptions and production delivery.",
  },
  {
    period: "Jun 2025 - Present",
    role: "AI Engineer",
    company: "Infutrix",
    copy: "Owning production document intelligence, multimodal grading, model fine-tuning, inference economics, and AI-led recruitment systems.",
  },
  {
    period: "Jul 2024 - Aug 2024",
    role: "AI & Cloud Engineering",
    company: "AICTE Edunet Foundation",
    copy: "Built and deployed conversational AI with intent classification, entity recognition, and cloud-native delivery on IBM Cloud.",
  },
  {
    period: "Jun 2024 - Jul 2024",
    role: "Data Analytics & Product Insights",
    company: "Dataplay",
    copy: "Led analytics delivery, built decision-ready Power BI dashboards, and translated operating data into stakeholder action.",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Model adaptation",
    copy: "Fine-tuning VLMs and LLMs with SFT, RFT, and GRPO; dataset design, augmentation, error analysis, and evaluation that reflects real use.",
    tools: "PyTorch / Hugging Face / Qwen / vLLM",
  },
  {
    number: "02",
    title: "Document intelligence",
    copy: "Handwriting OCR, layout parsing, visual detection, semantic mapping, rubric reasoning, and confidence-gated review pipelines.",
    tools: "VLMs / YOLO / OpenCV / OCR / RAG",
  },
  {
    number: "03",
    title: "Agents & voice systems",
    copy: "Multi-agent orchestration, tool calling, retrieval, realtime voice, and assistants that can act across browsers, documents, and local systems.",
    tools: "LangChain / LlamaIndex / Pipecat / STT / TTS",
  },
  {
    number: "04",
    title: "Production AI",
    copy: "From the first evaluation set to a monitored, cost-aware service: model routing, GPU deployment, APIs, containers, CI/CD, and cloud infrastructure.",
    tools: "FastAPI / Docker / AWS / GCP / RunPod",
  },
  {
    number: "05",
    title: "AI product engineering",
    copy: "Turning a model into a usable product with the right feedback loops, subscriptions, realtime data, mobile delivery, and measurable user outcomes.",
    tools: "React Native / Supabase / Cloudflare / Analytics",
  },
  {
    number: "06",
    title: "Evaluation & economics",
    copy: "Accuracy is only one constraint. I design around cost per task, latency, failure modes, human review, and the business decision downstream.",
    tools: "CER / task metrics / observability / cost control",
  },
];

const filters: { label: string; value: WorkFilter }[] = [
  { label: "All work", value: "all" },
  { label: "AI products", value: "products" },
  { label: "Models & vision", value: "models" },
  { label: "Automation", value: "automation" },
];

export default function Home() {
  const [filter, setFilter] = useState<WorkFilter>("all");

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.1 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const visibleWork = filter === "all" ? work : work.filter((item) => item.category === filter);

  return (
    <main id="top">
      <nav className="site-nav shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top"><span>PK</span> Paras Kaushik</a>
        <div className="nav-tabs">
          <a href="#work">Work</a>
          <a href="#journey">Journey</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
        </div>
        <a className="nav-contact" href="mailto:paraskaushik862@gmail.com">Let&apos;s talk <span>↗</span></a>
      </nav>

      <header className="hero shell">
        <div className="hero-copy" data-reveal>
          <div className="availability"><i /> AI Engineer &amp; Co-founder at <a href="https://quietgradient.com" target="_blank" rel="noreferrer">QuietGradient ↗</a></div>
          <p className="hero-kicker">I BUILD AI PRODUCTS THAT LEAVE THE DEMO.</p>
          <h1>Models are useful.<br /><em>Systems create impact.</em></h1>
          <p className="hero-intro">I turn ambitious AI ideas into working products - fine-tuning models, designing evaluation loops, shipping full-stack experiences, and making the economics work in production.</p>
          <div className="hero-actions">
            <a className="button primary" href="#work">See what I&apos;ve built <span>↓</span></a>
            <a className="button secondary" href="/Paras-Kaushik-Resume.pdf" target="_blank">Resume <span>↗</span></a>
          </div>
        </div>
        <aside className="hero-proof" data-reveal>
          <div className="proof-label"><span>Current signal</span><i>2026</i></div>
          <strong>3L+</strong>
          <p>handwritten answer sheets evaluated for a major university</p>
          <div className="proof-divider" />
          <dl>
            <div><dt>80%</dt><dd>lower grading cost</dd></div>
            <div><dt>70%</dt><dd>less manual HR work</dd></div>
            <div><dt>7+</dt><dd>AI tools unified</dd></div>
          </dl>
        </aside>
      </header>

      <div className="signal-strip" aria-label="Core disciplines">
        <div>{["VLM FINE-TUNING", "DOCUMENT AI", "VOICE AGENTS", "RAG", "COMPUTER VISION", "AI PRODUCTS", "GPU INFERENCE", "EVALUATION SYSTEMS"].map((item) => <span key={item}>{item}<i>•</i></span>)}</div>
      </div>

      <section className="work-section shell" id="work">
        <div className="section-heading" data-reveal>
          <div><span className="section-index">01 / SELECTED WORK</span><h2>Built from model<br />to <em>market.</em></h2></div>
          <p>Products and systems where I owned more than the model: the data, evaluation, architecture, user experience, deployment, and measurable outcome.</p>
        </div>
        <div className="work-tabs" role="tablist" aria-label="Filter selected work" data-reveal>
          {filters.map((item) => <button key={item.value} role="tab" aria-selected={filter === item.value} className={filter === item.value ? "active" : ""} onClick={() => setFilter(item.value)}>{item.label}</button>)}
        </div>
        <div className="work-grid">
          {visibleWork.map((item, index) => (
            <article className="case-card" key={item.title} data-reveal style={{ "--delay": `${index * 70}ms` } as CSSProperties}>
              <div className="case-head"><span>{item.eyebrow}</span><b>{String(index + 1).padStart(2, "0")}</b></div>
              <div className="case-title"><div><h3>{item.title}</h3><p>{item.summary}</p></div><div className="case-metric"><strong>{item.metric}</strong><span>{item.metricLabel}</span></div></div>
              <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              {item.note && <p className="case-note">{item.note}</p>}
              <div className="case-footer"><div className="tech-list">{item.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>{item.links && <div className="case-links">{item.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div>}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-section" id="skills"><div className="shell">
        <div className="section-heading compact" data-reveal>
          <div><span className="section-index">02 / ENGINEERING RANGE</span><h2>The skillset behind<br />the <em>shipping.</em></h2></div>
          <p>I work across the full AI product stack. The goal is not to use every technique - it is to choose the smallest reliable system that wins on quality, latency, and cost.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => <article key={item.number} data-reveal><span>{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p><strong>{item.tools}</strong></article>)}
        </div>
      </div></section>

      <section className="journey-section shell" id="journey">
        <div className="section-heading compact" data-reveal>
          <div><span className="section-index">03 / JOURNEY</span><h2>Learning fast.<br /><em>Owning more.</em></h2></div>
          <p>A progression from analytics and cloud AI to production model engineering and founder-level product ownership.</p>
        </div>
        <div className="journey-ladder">
          {journey.map((item, index) => <article key={`${item.company}-${item.period}`} data-reveal>
            <div className="journey-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
            <div className="journey-period">{item.period}</div>
            <div className="journey-role"><h3>{item.role}</h3><strong>{item.company}</strong></div>
            <p>{item.copy}</p>
          </article>)}
        </div>
      </section>

      <section className="about-section" id="about"><div className="shell about-grid">
        <figure className="portrait-sticker" data-reveal>
          <span className="sticker-orbit" aria-hidden="true" />
          <Image src="/paras-kaushik-sticker.png" alt="Portrait sticker of Paras Kaushik" width={1080} height={1456} sizes="(max-width: 620px) 340px, 390px" priority={false} />
          <figcaption><i>PARAS KAUSHIK</i><p>AI Engineer / Product Founder</p></figcaption>
        </figure>
        <div className="about-copy" data-reveal>
          <span className="section-index">04 / BEHIND THE WORK</span>
          <h2>I care about AI that survives contact with <em>real users.</em></h2>
          <p>I studied Computer Science Engineering at MAIT, Baddi, and moved quickly from analytics into computer vision, language models, and product engineering. Since then, I have built AI across education, hiring, productivity, and document intelligence.</p>
          <p>My best work sits between research and product: understanding why a model fails, improving it with the right data and training strategy, then building the infrastructure and experience that lets people trust it.</p>
          <div className="about-facts"><div><span>EDUCATION</span><strong>B.Tech CSE, 2021-2025</strong></div><div><span>CGPA</span><strong>9.23</strong></div><div><span>LOCATION</span><strong>India / UTC+5:30</strong></div><div><span>FOCUS</span><strong>Applied AI + Products</strong></div></div>
        </div>
      </div></section>

      <section className="recognition shell" data-reveal>
        <span className="section-index">05 / SIGNALS</span>
        <div><strong>AI Summit 2026</strong><p>Presented GradeSmith to 500+ industry professionals and academic leaders.</p></div>
        <div><strong>Ideathon - 1st place</strong><p>Designed a tongue-driven wheelchair system recognized for innovation and technical execution.</p></div>
      </section>

      <section className="contact-section" id="contact"><div className="shell" data-reveal>
        <span className="section-index">06 / OPEN TO HARD PROBLEMS</span>
        <h2>Need someone who can take AI from <em>maybe</em> to <em>working?</em></h2>
        <div className="contact-bottom"><p>Applied AI roles, ambitious products, and systems that need real engineering behind the model.</p><div><a href="mailto:paraskaushik862@gmail.com">paraskaushik862@gmail.com ↗</a><a href="https://www.linkedin.com/in/paraskaushik07" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
      </div></section>

      <footer className="shell"><span>Paras Kaushik / AI Engineer</span><span>© 2026</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ContactForm } from "./components/contact-form";
import { SiteFooter } from "./components/site-footer";
import { SiteNav } from "./components/site-nav";

const projects = [
  {
    title: "Flashr - AI-native exam prep",
    badge: "Founder · QuietGradient",
    copy: "An AI retention platform for India's competitive exams. Converts PDFs, screenshots, and handwritten notes into flashcards and MCQs, schedules revision with SM-2, and adds live learning through a Duel Arena.",
    metric: "Shipped across web and Google Play",
    tags: ["React Native", "Supabase", "Gemini", "OCR", "SM-2"],
    links: [
      ["flashrapp.in", "https://flashrapp.in"],
      ["Google Play", "https://play.google.com/store/apps/details?id=com.den.flashr"],
      ["QuietGradient", "https://quietgradient.com"],
    ],
    featured: true,
  },
  {
    title: "GradeSmith - institutional grading AI",
    badge: "Infutrix",
    copy: "A multimodal grading pipeline for handwritten university answer sheets: Qwen3.5 9B fine-tuning, YOLO-based strikethrough detection, rubric-aware reasoning, and confidence-controlled evaluation.",
    metric: "3L+ sheets evaluated · 80% lower inference cost",
    tags: ["Qwen3.5 9B", "YOLO", "VLM fine-tuning", "Agentic evaluation"],
  },
  {
    title: "Hirefl.ai - hiring intelligence",
    badge: "AI automation",
    copy: "An end-to-end hiring workflow for resume parsing, candidate screening, real-time voice interviews, automated scoring, and decision-ready reports for HR teams.",
    metric: "70% less repetitive HR workload",
    tags: ["LLaMA", "Voice AI", "STT / TTS", "FastAPI"],
  },
  {
    title: "KAIROS AI - multi-tool workspace",
    badge: "Independent build",
    copy: "A modular AI workspace featuring PRINCE for voice control across web and local systems, DoChat for multi-document conversations, plus OCR, translation, QR workflows, and task agents.",
    metric: "7+ coordinated AI capabilities",
    tags: ["Multi-agent", "RAG", "Voice control", "Tool calling"],
  },
];

const experience = [
  { role: "Product Founder", org: "Flashr", meta: "2026 - Present · India", bullets: ["Shipping an AI-native learning product across web and Android.", "Owning product, AI workflows, subscriptions, realtime systems, and delivery."] },
  { role: "AI Engineer", org: "Infutrix", meta: "Jun 2025 - Present · Mohali, India", bullets: ["Built institution-scale document intelligence processing 3L+ answer sheets.", "Fine-tuned Qwen3.5 9B and specialist vision models while reducing inference cost by 80%.", "Built Hirefl.ai to automate screening and first-round interviews."] },
  { role: "AI & Cloud Engineering", org: "AICTE Edunet Foundation", meta: "Jul 2024 - Aug 2024 · Remote", bullets: ["Built and deployed conversational AI with intent and entity intelligence on IBM Cloud."] },
  { role: "Data Analytics & Product Insights", org: "Dataplay", meta: "Jun 2024 - Jul 2024 · Remote", bullets: ["Led analytics delivery and turned operating data into decision-ready Power BI dashboards."] },
];

const capabilityMatches = {
  documents: { label: "Document AI", title: "From noisy pages to defensible decisions", copy: "Handwriting OCR, layout understanding, fine-tuned VLMs, specialist CV gates, rubric reasoning, and confidence-led review.", proof: "GradeSmith · 3L+ sheets · 80% cost reduction" },
  agents: { label: "Agents & Voice", title: "AI that can retrieve, reason, speak, and act", copy: "RAG, multi-agent orchestration, tool calling, realtime STT/TTS, browser and local-system control, and evaluation loops.", proof: "KAIROS · PRINCE · DoChat · Hirefl.ai" },
  product: { label: "AI Product", title: "A model is only the beginning", copy: "I connect AI quality to mobile UX, subscriptions, realtime data, analytics, infrastructure, and the product loops that create retention.", proof: "Flashr · Web + Android · founder ownership" },
};

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
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <div className="status-pill"><span /> Open to roles, consulting &amp; collaborations</div>
            <p className="kicker">AI Engineer · Product Founder · Builder</p>
            <h1>I build AI systems that <em>actually ship</em> to production.</h1>
            <p className="hero-sub">From fine-tuning Qwen3.5 9B for handwritten grading to shipping an AI study product on Google Play, I work across models, infrastructure, and product - wherever the hard part is.</p>
            <div className="hero-actions"><Link className="btn primary" href="/hire">Hire me</Link><Link className="btn secondary" href="/consulting">Consult with me</Link><a className="btn ghost" href="#work">See the work ↓</a></div>
          </div>
          <div className="hero-person reveal">
            <div className="person-disc" />
            <Image src="/paras-kaushik-sticker.png" alt="Paras Kaushik" width={1080} height={1456} priority sizes="(max-width: 760px) 360px, 430px" />
            <div className="person-card"><span>CURRENTLY</span><strong>Building applied AI systems + Flashr</strong></div>
          </div>
        </div>
        <div className="container stats-strip reveal">
          <div><strong>3L+</strong><span>answer sheets evaluated</span></div>
          <div><strong>80%</strong><span>grading cost reduced</span></div>
          <div><strong>70%</strong><span>manual HR work reduced</span></div>
          <div><strong>7+</strong><span>AI capabilities unified</span></div>
        </div>
      </header>

      <section className="section paths-section"><div className="container">
        <div className="section-head reveal"><span className="section-index">01 / WORK WITH ME</span><h2>Two clear ways to start.</h2></div>
        <div className="paths-grid">
          <Link className="path-card reveal" href="/hire"><span className="path-icon">01</span><h3>Hire Me</h3><p>For teams looking for an applied AI engineer who owns data, model quality, deployment, and product outcomes.</p><b>See what I bring →</b></Link>
          <Link className="path-card reveal" href="/consulting"><span className="path-icon">02</span><h3>Consulting</h3><p>For founders and teams who need to validate, architect, or ship an AI feature without wasting cycles.</p><b>View services →</b></Link>
        </div>
      </div></section>

      <section className="section match-section"><div className="container">
        <div className="section-head reveal"><span className="section-index">02 / PROBLEM-TO-PROOF</span><h2>Choose the problem. See my closest proof.</h2><p>A fast way to understand where I create leverage.</p></div>
        <div className="match-console reveal">
          <div className="match-tabs" role="tablist" aria-label="Choose an AI problem">{(Object.keys(capabilityMatches) as MatchKey[]).map((key) => <button key={key} role="tab" aria-selected={match === key} className={match === key ? "active" : ""} onClick={() => setMatch(key)}>{capabilityMatches[key].label}</button>)}</div>
          <div className="match-output" key={match}><div><span>BEST MATCH / {activeMatch.label}</span><h3>{activeMatch.title}</h3><p>{activeMatch.copy}</p></div><aside><span>SHIPPED PROOF</span><strong>{activeMatch.proof}</strong><Link href={match === "product" ? "/consulting" : "/hire"}>Discuss this problem ↗</Link></aside></div>
        </div>
      </div></section>

      <section className="section" id="work"><div className="container">
        <div className="section-head reveal"><span className="section-index">03 / SELECTED WORK</span><h2>Things I&apos;ve built.</h2><p>Production systems with real users and measurable outcomes - not isolated demos.</p></div>
        <div className="work-grid">{projects.map((project) => <article className={`work-card reveal ${project.featured ? "featured" : ""}`} key={project.title}><div className="work-top"><h3>{project.title}</h3><span className="badge">{project.badge}</span></div><p>{project.copy}</p><strong className="work-metric">{project.metric}</strong><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{project.links && <div className="work-links">{project.links.map(([label, href]) => <a key={href} href={href} target="_blank" rel="noreferrer">{label} ↗</a>)}</div>}</article>)}</div>
      </div></section>

      <section className="section experience-section" id="experience"><div className="container">
        <div className="section-head reveal"><span className="section-index">04 / EXPERIENCE</span><h2>Where I&apos;ve built and learned.</h2></div>
        <div className="timeline">{experience.map((item) => <article className="timeline-item reveal" key={`${item.org}-${item.meta}`}><div className="timeline-dot" /><div className="timeline-head"><h3>{item.role}</h3><strong>{item.org}</strong><span>{item.meta}</span></div><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></article>)}</div>
      </div></section>

      <section className="section toolkit-section"><div className="container">
        <div className="section-head reveal"><span className="section-index">05 / TOOLKIT</span><h2>Skills across the whole system.</h2></div>
        <div className="skills-grid">
          <div className="skill-group reveal"><h3>Models &amp; learning</h3><div className="tags">{["LLMs & VLMs", "SFT / RFT / GRPO", "PyTorch", "Hugging Face", "vLLM", "Evaluation"].map(x => <span key={x}>{x}</span>)}</div></div>
          <div className="skill-group reveal"><h3>Vision &amp; documents</h3><div className="tags">{["Computer Vision", "OCR", "Layout Parsing", "YOLO", "OpenCV", "Handwriting AI"].map(x => <span key={x}>{x}</span>)}</div></div>
          <div className="skill-group reveal"><h3>Agents &amp; voice</h3><div className="tags">{["RAG", "Tool Calling", "LangChain", "LlamaIndex", "STT / TTS", "Pipecat"].map(x => <span key={x}>{x}</span>)}</div></div>
          <div className="skill-group reveal"><h3>Product &amp; deployment</h3><div className="tags">{["FastAPI", "Docker", "AWS / GCP", "RunPod", "React Native", "Supabase", "Cloudflare"].map(x => <span key={x}>{x}</span>)}</div></div>
        </div>
      </div></section>

      <section className="section about-section" id="about"><div className="container about-grid">
        <div className="about-photo reveal"><div className="photo-disc" /><Image src="/paras-kaushik-sticker.png" alt="Paras Kaushik portrait" width={1080} height={1456} sizes="(max-width: 700px) 340px, 390px" /></div>
        <div className="about-text reveal"><span className="section-index">06 / ABOUT</span><h2>Research depth.<br />Founder urgency.</h2><p>I studied Computer Science Engineering at MAIT, Baddi, then moved quickly from analytics into computer vision, language models, and production AI. My work now spans education, hiring, productivity, and document intelligence.</p><p>I care about systems that survive contact with real users. A fine-tuned model matters only when it is measurable, deployable, monitored, and economical enough to keep running.</p><div className="about-facts"><div><span>Education</span>B.Tech CSE, 2021-2025</div><div><span>CGPA</span>9.23</div><div><span>Location</span>India · UTC+5:30</div><div><span>Focus</span>Applied AI + products</div></div></div>
      </div></section>

      <section className="cta-band" id="contact"><div className="container"><div className="cta-copy reveal"><span className="section-index">07 / GET IN TOUCH</span><h2>Let&apos;s build something that works.</h2><p>Tell me about the role, product, or stubborn AI problem on your desk.</p></div><ContactForm /></div></section>
      <SiteFooter />
    </main>
  );
}

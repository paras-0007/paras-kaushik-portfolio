"use client";

import { useEffect, useMemo, useState, type CSSProperties, type PointerEvent } from "react";

type Lens = "impact" | "engineering";

const metrics = [
  { value: "100K+", label: "answer sheets", detail: "Processed across institutional deployments" },
  { value: "97.5%", label: "OCR accuracy", detail: "On real handwritten academic submissions" },
  { value: "80%", label: "lower cost", detail: "Per-sheet inference cost reduction" },
  { value: "70%", label: "less HR work", detail: "Delivered through recruitment automation" },
];

const pipeline = [
  { code: "01", name: "Ingest", caption: "High-volume answer sheets enter a controlled document pipeline.", tech: "PDF / image normalization" },
  { code: "02", name: "Detect", caption: "Specialist vision models isolate writing and reject struck-through content.", tech: "Fine-tuned YOLO" },
  { code: "03", name: "Read", caption: "A tuned vision-language model converts noisy handwriting into structured answers.", tech: "Qwen-VL / 97.5% OCR" },
  { code: "04", name: "Reason", caption: "Agentic evaluation maps responses to rubrics and awards defensible partial credit.", tech: "Multi-step LLM orchestration" },
  { code: "05", name: "Explain", caption: "Institutions receive traceable scores, feedback, and confidence signals.", tech: "FastAPI / production delivery" },
];

const projects = [
  {
    id: "01",
    title: "GradeSmith",
    subtitle: "Institution-scale assessment intelligence",
    impact: "Architected a multimodal grading system processing 100,000+ handwritten answer sheets across 20+ subjects, achieving 97.5% OCR accuracy while reducing inference cost by 80%.",
    engineering: "Designed the full document-to-decision pipeline: Qwen-VL fine-tuning, YOLO-based strikethrough detection, semantic answer mapping, rubric-aware agentic reasoning, confidence signals, and production APIs.",
    proof: "100K+ sheets / 20+ subjects",
    stack: ["Qwen-VL", "YOLO", "Agentic evaluation", "FastAPI"],
    className: "project-lime",
  },
  {
    id: "02",
    title: "Hirefl.ai",
    subtitle: "Recruitment intelligence, end to end",
    impact: "Transformed resume screening and first-round interviews into an evidence-led automated workflow, reducing repetitive HR effort by 70%.",
    engineering: "Built LLaMA-based resume parsing, candidate screening, real-time STT/TTS interviews, automated scoring, and a production FastAPI service as one connected decision system.",
    proof: "70% lower HR workload",
    stack: ["LLaMA", "Voice AI", "Evaluation", "FastAPI"],
    className: "project-coral",
  },
  {
    id: "03",
    title: "Flashr",
    subtitle: "Co-founder / AI-native learning product",
    impact: "Turned PDFs, screenshots, and handwritten notes into adaptive flashcards and MCQs for high-stakes competitive exam preparation.",
    engineering: "Designed multimodal ingestion, fine-tuned generation workflows, spaced repetition, subject-aware organization, and a multiplayer learning loop as a cohesive product.",
    proof: "5 major exam categories",
    stack: ["Multimodal AI", "Fine-tuned LLMs", "Product systems", "EdTech"],
    className: "project-violet",
    href: "https://flashrapp.in",
  },
  {
    id: "04",
    title: "KAIROS",
    subtitle: "Multi-agent knowledge operating system",
    impact: "Unified document intelligence, voice assistance, translation, and workflow automation to accelerate knowledge work by more than 40%.",
    engineering: "Architected an extensible multi-agent system connecting document Q&A, OCR, the PRINCE voice assistant, multilingual translation, and automated QR workflows.",
    proof: "7+ coordinated AI capabilities",
    stack: ["RAG", "Multi-agent", "OCR", "STT / TTS"],
    className: "project-blue",
  },
];

const experience = [
  { period: "2025 - NOW", role: "AI Engineer", company: "Infutrix", copy: "Leading production multimodal AI for assessment and recruitment intelligence." },
  { period: "2024", role: "AI & Cloud Intern", company: "AICTE Edunet Foundation", copy: "Deployed conversational AI with intent and entity intelligence on IBM Cloud." },
  { period: "2024", role: "Data Analyst Intern", company: "Dataplay", copy: "Led analytics delivery and translated operational data into stakeholder decisions." },
];

const capabilities = ["Computer Vision", "Vision-Language Models", "Handwriting OCR", "Agentic AI", "RAG", "SFT / RFT / GRPO", "PyTorch", "vLLM", "FastAPI", "GPU inference", "Voice AI", "Evaluation systems", "Docker", "AWS / GCP", "Product architecture"];

const fieldNotes = [
  { number: "01", title: "Fine-tune, retrieve, or route?", copy: "A decision framework for choosing the smallest architecture that can meet the accuracy target.", signal: "ARCHITECTURE" },
  { number: "02", title: "Evaluating handwriting OCR", copy: "Why one global accuracy number hides the errors that actually break downstream decisions.", signal: "EVALUATION" },
  { number: "03", title: "Where agents fail in production", copy: "Five failure modes across planning, tool use, grounding, confidence, and observability.", signal: "RELIABILITY" },
  { number: "04", title: "The inference cost playbook", copy: "Routing, batching, caching, quantization, and review thresholds as one connected system.", signal: "EFFICIENCY" },
];

export default function Home() {
  const [lens, setLens] = useState<Lens>("impact");
  const [activeStage, setActiveStage] = useState(0);
  const [accuracy, setAccuracy] = useState(84);
  const [speed, setSpeed] = useState(62);
  const [volume, setVolume] = useState(76);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveStage((current) => (current + 1) % pipeline.length), 2400);
    return () => window.clearInterval(timer);
  }, []);

  const architecture = useMemo(() => {
    const model = accuracy > 78 ? "Fine-tuned VLM + specialist CV gate" : "Routed multimodal API + retrieval";
    const runtime = volume > 66 ? "Batched GPU inference + async queue" : "Elastic API inference";
    const control = accuracy > 90 ? "Confidence-gated human review" : speed > 72 ? "Low-latency model cascade" : "Rubric + confidence evaluator";
    const estimated = Math.max(18, Math.round(96 - volume * 0.46 - speed * 0.18 + accuracy * 0.12));
    return { model, runtime, control, estimated };
  }, [accuracy, speed, volume]);

  function moveSignal(event: PointerEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Paras Kaushik, home"><span className="brand-mark">P/K</span><span>Paras Kaushik</span></a>
        <div className="nav-links" aria-label="Primary navigation"><a href="#systems">Systems</a><a href="#lab">Decision Lab</a><a href="#field-manual">Field Manual</a></div>
        <a className="nav-cta" href="#contact">Start a conversation <span aria-hidden="true">↗</span></a>
      </nav>

      <header className="hero" id="top" onPointerMove={moveSignal}>
        <div className="hero-grid" aria-hidden="true" /><div className="hero-glow" aria-hidden="true" />
        <div className="signal-field" aria-hidden="true">
          {Array.from({ length: 16 }, (_, index) => <i key={index} style={{ "--i": index } as CSSProperties} />)}
          <span className="signal-core"><b>INPUT</b><em>INTELLIGENCE</em></span>
        </div>
        <div className="shell hero-content">
          <div className="status-line" data-reveal><span className="live-dot" /><span>PRODUCTION AI ENGINEER</span><span className="status-divider">/</span><span>INDIA · UTC+5:30</span></div>
          <h1 data-reveal>I architect AI systems that turn <span>unstructured data</span> into decisions at scale.</h1>
          <div className="hero-bottom" data-reveal>
            <p>From 100,000+ handwritten answer sheets to AI-led recruitment and adaptive learning products, I design, fine-tune, and deploy intelligent systems where accuracy, cost, and reliability all matter.</p>
            <div className="hero-actions"><a className="primary-action" href="#systems"><span>Explore the systems</span><b>↓</b></a><a className="text-action" href="/Paras-Kaushik-Resume.pdf" target="_blank">View resume ↗</a></div>
          </div>
        </div>
        <div className="marquee" aria-hidden="true"><div><span>COMPUTER VISION</span><i>+</i><span>VISION-LANGUAGE MODELS</span><i>+</i><span>AGENTIC AI</span><i>+</i><span>PRODUCTION SYSTEMS</span><i>+</i><span>COMPUTER VISION</span><i>+</i><span>VISION-LANGUAGE MODELS</span><i>+</i><span>AGENTIC AI</span><i>+</i><span>PRODUCTION SYSTEMS</span><i>+</i></div></div>
      </header>

      <section className="proof shell" aria-label="Verified impact">
        {metrics.map((metric, index) => <article key={metric.value} data-reveal style={{ "--delay": `${index * 90}ms` } as CSSProperties}><span className="metric-index">0{index + 1}</span><strong>{metric.value}</strong><h2>{metric.label}</h2><p>{metric.detail}</p></article>)}
      </section>

      <section className="systems" id="systems"><div className="shell">
        <div className="section-intro" data-reveal><div><span className="section-code">01 / SELECTED SYSTEMS</span><h2>Proof, not project cards.</h2></div><p>Four systems that show product ownership, research depth, and the judgment required to make AI survive contact with real users.</p></div>
        <div className="lens-control" data-reveal><span>READ THE WORK THROUGH</span><div role="group" aria-label="Project perspective"><button className={lens === "impact" ? "active" : ""} onClick={() => setLens("impact")} aria-pressed={lens === "impact"}>Business impact</button><button className={lens === "engineering" ? "active" : ""} onClick={() => setLens("engineering")} aria-pressed={lens === "engineering"}>Engineering depth</button></div></div>
        <div className="project-list">
          {projects.map((project) => <article className={`project-row ${project.className}`} key={project.title} data-reveal>
            <div className="project-number">{project.id}</div>
            <div className="project-main"><span className="project-subtitle">{project.subtitle}</span><h3>{project.title}</h3><p key={lens} className="project-copy">{lens === "impact" ? project.impact : project.engineering}</p><div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
            <div className="project-proof"><span>VERIFIED SIGNAL</span><strong>{project.proof}</strong>{project.href ? <a href={project.href} target="_blank" rel="noreferrer">Open product ↗</a> : <i aria-hidden="true">↗</i>}</div>
            <div className="project-orbit" aria-hidden="true"><i /><i /><i /></div>
          </article>)}
        </div>
      </div></section>

      <section className="pipeline-section"><div className="shell">
        <div className="section-intro inverted" data-reveal><div><span className="section-code">02 / SYSTEM X-RAY</span><h2>Inside GradeSmith.</h2></div><p>A document-to-decision pipeline engineered for the ambiguity of real handwriting, institutional rubrics, and production economics.</p></div>
        <div className="pipeline" data-reveal>
          <div className="pipeline-rail" aria-hidden="true"><span style={{ width: `${(activeStage / (pipeline.length - 1)) * 100}%` }} /></div>
          <div className="pipeline-stages">{pipeline.map((stage, index) => <button key={stage.name} className={index === activeStage ? "active" : ""} onClick={() => setActiveStage(index)} onMouseEnter={() => setActiveStage(index)} onFocus={() => setActiveStage(index)} aria-pressed={index === activeStage}><span>{stage.code}</span><strong>{stage.name}</strong></button>)}</div>
          <div className="pipeline-readout"><div className="readout-visual" aria-hidden="true"><span className="scan-line" /><b>{pipeline[activeStage].code}</b><i /><i /><i /></div><div className="readout-copy" key={activeStage}><span>ACTIVE STAGE / {pipeline[activeStage].tech}</span><h3>{pipeline[activeStage].name}</h3><p>{pipeline[activeStage].caption}</p></div></div>
        </div>
      </div></section>

      <section className="decision-lab shell" id="lab">
        <div className="section-intro" data-reveal><div><span className="section-code">03 / AI DECISION LAB</span><h2>Architecture is a trade-off.</h2></div><p>Change the operating constraints. The system map responds with the production strategy I would investigate first.</p></div>
        <div className="lab-console" data-reveal>
          <div className="controls"><div className="console-head"><span>OPERATING CONSTRAINTS</span><i>LIVE MODEL</i></div>
            <label><span><b>Accuracy priority</b><em>{accuracy}%</em></span><input aria-label="Accuracy priority" type="range" min="30" max="100" value={accuracy} onChange={(e) => setAccuracy(Number(e.target.value))} /></label>
            <label><span><b>Response speed</b><em>{speed}%</em></span><input aria-label="Response speed" type="range" min="20" max="100" value={speed} onChange={(e) => setSpeed(Number(e.target.value))} /></label>
            <label><span><b>Expected volume</b><em>{volume}%</em></span><input aria-label="Expected volume" type="range" min="10" max="100" value={volume} onChange={(e) => setVolume(Number(e.target.value))} /></label>
            <p className="lab-note">Illustrative strategy map. Real architecture begins with data, evaluation criteria, and operational constraints.</p>
          </div>
          <div className="architecture"><div className="console-head"><span>RECOMMENDED STARTING POINT</span><i>CONFIDENCE {architecture.estimated}%</i></div><div className="architecture-map">
            <div className="arch-node source"><span>01</span><b>INPUT</b><small>Unstructured multimodal data</small></div><div className="arch-connection"><i /></div>
            <div className="arch-node active"><span>02</span><b>{architecture.model}</b><small>Understanding layer</small></div><div className="arch-connection"><i /></div>
            <div className="arch-node"><span>03</span><b>{architecture.runtime}</b><small>Runtime strategy</small></div><div className="arch-connection"><i /></div>
            <div className="arch-node output"><span>04</span><b>{architecture.control}</b><small>Decision control</small></div>
          </div></div>
        </div>
      </section>

      <section className="capability-band"><div className="capability-track" aria-label="Technical capabilities">{[...capabilities, ...capabilities].map((capability, index) => <span key={`${capability}-${index}`}>{capability}<i>◆</i></span>)}</div></section>

      <section className="field-manual shell" id="field-manual">
        <div className="section-intro" data-reveal><div><span className="section-code">04 / FIELD MANUAL</span><h2>How I think about production AI.</h2></div><p>Useful technical notes for founders making product decisions and engineers responsible for reliable delivery.</p></div>
        <div className="notes">{fieldNotes.map((note) => <article key={note.number} data-reveal><span className="note-number">{note.number}</span><div><span className="note-signal">{note.signal}</span><h3>{note.title}</h3><p>{note.copy}</p></div><span className="note-arrow" aria-hidden="true">↗</span></article>)}</div>
      </section>

      <section className="experience shell">
        <div className="section-intro" data-reveal><div><span className="section-code">05 / TRAJECTORY</span><h2>Research depth. Product ownership.</h2></div><p>My work has moved from analytics and cloud AI into owning production multimodal systems with measurable institutional impact.</p></div>
        <div className="experience-list">{experience.map((item) => <article key={item.company} data-reveal><span>{item.period}</span><div><h3>{item.role}</h3><strong>{item.company}</strong></div><p>{item.copy}</p></article>)}</div>
        <div className="recognition" data-reveal><span>ALSO SIGNALING</span><strong>Presented GradeSmith at AI Summit 2026 to 500+ industry and academic leaders.</strong><strong>1st place, Ideathon - Tongue Driven System wheelchair.</strong></div>
      </section>

      <section className="contact" id="contact"><div className="contact-radar" aria-hidden="true"><i /><i /><i /><b /></div><div className="shell contact-content" data-reveal>
        <span className="section-code">06 / OPEN CHANNEL</span><h2>Bring me the problem that looks too messy.</h2><p>Hiring for an applied AI role, building an ambitious product, or trying to move a promising model into production? Let us map the real system.</p>
        <div className="contact-actions"><a className="contact-primary" href="mailto:paraskaushik862@gmail.com">paraskaushik862@gmail.com <span>↗</span></a><div><a href="https://www.linkedin.com/in/paraskaushik07" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="/Paras-Kaushik-Resume.pdf" target="_blank">Resume ↗</a><a href="tel:+919215460007">+91 92154 60007</a></div></div>
      </div></section>
      <footer className="shell footer"><span>P/K · AI SYSTEMS ENGINEERING</span><span>© 2026 Paras Kaushik</span><a href="#top">Return to signal ↑</a></footer>
    </main>
  );
}

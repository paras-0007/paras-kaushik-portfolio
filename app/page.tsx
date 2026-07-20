const projects = [
  {
    title: "GradeSmith",
    kicker: "Production AI grading platform",
    description:
      "A national-scale grading pipeline processing 100,000+ answer sheets across 20+ subjects. Combines fine-tuned Qwen-VL for handwriting understanding, YOLO-based strikethrough detection, and multi-step LLM reasoning for rubric-aware evaluation.",
    impact: "97.5% OCR accuracy · 80% lower inference cost",
    tags: ["Qwen-VL", "YOLO", "Agentic AI", "FastAPI"],
  },
  {
    title: "Hirefl.ai",
    kicker: "AI recruitment automation",
    description:
      "An end-to-end recruiting platform with LLaMA-based resume parsing, candidate screening, real-time voice interviews, automated scoring, and a production FastAPI backend.",
    impact: "70% reduction in HR workload",
    tags: ["LLaMA", "STT / TTS", "FastAPI", "LLM Evaluation"],
  },
  {
    title: "Flashr",
    kicker: "Co-founder · AI-native study platform",
    description:
      "Turns PDFs, images, and handwritten notes into adaptive flashcards and MCQs for UPSC, GATE, CAT, NEET, and JEE. Features spaced repetition, smart subject organization, and a multiplayer duel arena.",
    impact: "From raw notes to an adaptive study loop",
    tags: ["Multimodal AI", "Fine-tuned LLMs", "EdTech", "Product"],
    href: "https://flashrapp.in",
  },
  {
    title: "KAIROS",
    kicker: "Multi-agent productivity system",
    description:
      "A modular platform unifying multi-document Q&A, a real-time voice assistant, OCR document intelligence, multilingual translation, and automated QR workflows under one extensible agent architecture.",
    impact: "7+ AI capabilities · 40% faster workflows",
    tags: ["RAG", "Multi-agent", "OCR", "Voice AI"],
  },
  {
    title: "Qwen-VL Handwriting OCR",
    kicker: "Fine-tuned vision-language model",
    description:
      "Built a custom-annotated handwriting dataset and end-to-end augmentation pipeline, then fine-tuned Qwen-3-VL-8B for robust reading of noisy, real-world documents.",
    impact: "8% character error rate",
    tags: ["Qwen-3-VL-8B", "SFT", "Data Curation", "OCR"],
  },
];

const experience = [
  {
    role: "AI Engineer",
    company: "Infutrix",
    period: "Jun 2025 — Present",
    location: "Mohali, India",
    bullets: [
      "Architecting GradeSmith, a multimodal grading system deployed across major Indian universities and schools.",
      "Building fine-tuned VLM, computer-vision, and agentic reasoning pipelines that are accurate, explainable, and cost-efficient.",
      "Shipped Hirefl.ai, combining resume intelligence, voice interviews, and automated candidate scoring.",
    ],
  },
  {
    role: "AI & Cloud Computing Intern",
    company: "AICTE Edunet Foundation",
    period: "Jul 2024 — Aug 2024",
    location: "Remote, India",
    bullets: [
      "Built and deployed a conversational AI assistant with intent classification, entity recognition, and scalable IBM Cloud architecture.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Dataplay",
    period: "Jun 2024 — Jul 2024",
    location: "Remote, India",
    bullets: [
      "Created interactive Power BI dashboards and led a cross-functional analytics project to turn business data into decisions.",
    ],
  },
];

const skillGroups = [
  {
    title: "AI / ML",
    items: ["Computer Vision", "OCR & Layout Parsing", "LLMs & VLMs", "RAG", "Agentic AI", "SFT / RFT / GRPO", "NLP"],
  },
  {
    title: "Frameworks",
    items: ["PyTorch", "TensorFlow", "LangChain", "LlamaIndex", "FAISS", "OpenCV", "Hugging Face", "YOLO", "vLLM"],
  },
  {
    title: "Deployment",
    items: ["FastAPI", "Docker", "AWS", "GCP", "RunPod", "Vast.ai", "Cloudflare", "CI / CD"],
  },
  {
    title: "Interfaces",
    items: ["OpenAI", "Gemini", "IBM Watson", "STT / TTS", "Streamlit", "Power BI"],
  },
];

function SectionHeader({ index, label, title, intro }: { index: string; label: string; title: string; intro?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{index} / {label}</p>
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Paras Kaushik, home">~/paras</a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
        </div>
        <a className="nav-cta" href="#contact">Get in touch <span>↗</span></a>
      </nav>

      <header className="hero shell" id="top">
        <div className="availability"><span aria-hidden="true" /> Open to AI engineering roles & collaborations</div>
        <p className="hero-kicker">AI Engineer · Computer Vision · LLM / VLM Systems</p>
        <h1>I build multimodal AI systems that perform in the real world.</h1>
        <p className="hero-copy">
          I&apos;m <strong>Paras Kaushik</strong> — an AI engineer turning computer vision, fine-tuned language models, and agentic workflows into production systems with measurable outcomes.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="mailto:paraskaushik862@gmail.com">Work with me <span>↗</span></a>
          <a className="button button-secondary" href="/Paras-Kaushik-Resume.pdf" target="_blank">View résumé</a>
        </div>
        <div className="metrics" aria-label="Selected impact metrics">
          <div><strong>100K+</strong><span>answer sheets processed</span></div>
          <div><strong>97.5%</strong><span>handwriting OCR accuracy</span></div>
          <div><strong>80%</strong><span>inference cost reduction</span></div>
          <div><strong>70%</strong><span>HR workload reduced</span></div>
        </div>
      </header>

      <section className="section shell" id="work">
        <SectionHeader index="01" label="SELECTED WORK" title="Systems I’ve built" intro="Production work and ambitious products, grounded in measurable outcomes — not just demos." />
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card project-${index + 1}`} key={project.title}>
              <div className="card-topline"><span>{String(index + 1).padStart(2, "0")}</span><span className="card-kicker">{project.kicker}</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="impact">{project.impact}</p>
              <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              {project.href ? <a className="project-link" href={project.href} target="_blank" rel="noreferrer">Visit product ↗</a> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="section shell" id="experience">
        <SectionHeader index="02" label="EXPERIENCE" title="Where I’ve worked" />
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.role}-${item.company}`}>
              <div className="timeline-meta">
                <span>{item.period}</span>
                <span>{item.location}</span>
              </div>
              <div className="timeline-content">
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell" id="toolkit">
        <SectionHeader index="03" label="TOOLKIT" title="Skills & stack" />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tags large">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section shell about" id="about">
        <SectionHeader index="04" label="ABOUT" title="Engineering AI beyond the notebook" />
        <div className="about-grid">
          <div className="about-copy">
            <p>I care about the unglamorous gap between a model that works once and a system people can rely on every day. That means owning the full path: data curation, fine-tuning, evaluation, orchestration, deployment, and cost.</p>
            <p>My work spans automated assessment, recruitment intelligence, document understanding, voice systems, and AI-native education products. I&apos;m especially drawn to problems where multimodal research meets real operational scale.</p>
          </div>
          <div className="recognition">
            <div><span>Recognition</span><strong>Presented GradeSmith at AI Summit 2026 to 500+ industry and academic leaders</strong></div>
            <div><span>Innovation</span><strong>1st place, Ideathon — Tongue Driven System wheelchair</strong></div>
            <div><span>Certifications</span><strong>Deep Learning · Machine Learning · Google Data Analytics</strong></div>
            <div><span>Based in</span><strong>India · IST (UTC+5:30)</strong></div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contact-inner">
          <p className="eyebrow">05 / CONTACT</p>
          <h2>Let’s build something useful.</h2>
          <p>Have a hard AI problem, an ambitious product, or a role where applied research needs to ship? I’d like to hear about it.</p>
          <a className="email-link" href="mailto:paraskaushik862@gmail.com">paraskaushik862@gmail.com <span>↗</span></a>
          <div className="socials">
            <a href="https://www.linkedin.com/in/paraskaushik07" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="tel:+919215460007">+91 92154 60007</a>
            <a href="/Paras-Kaushik-Resume.pdf" target="_blank">Résumé ↗</a>
          </div>
        </div>
      </section>

      <footer className="shell footer">
        <p>© 2026 Paras Kaushik · AI Engineer</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
